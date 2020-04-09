import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { isAdmin } from '../../../utils/helper';
import '../../../stylesheets/story/story-details.scss';

const StoryDetails = ({ story, show, handleShow, handleClose, storyStatus, setStoryStatus }) => {
  const [status, setStatus] = useState(story.status);
  const [open, setOpen] = useState(false);

  const handleApproveAction = () => {
    setStatus('approved');
    setOpen(true);
    setStoryStatus('approved');
  };
  const handleRejectAction = () => {
    setStatus('rejected');
    setOpen(true);
    setStoryStatus('rejected');
  };

  const hideModal = () => {
    handleClose();
    setOpen(false);
  };

  return (
    <>
      <Modal show={show} onHide={hideModal}>
        {open && (
          <Alert variant="success" onClose={() => setOpen(false)}>
            <p>Story has been successfully {status}</p>
          </Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title>{story.description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Status</h5>
          <p>{status}</p>
          <hr />
          <h5>Summary</h5>
          <p>{story.summary}</p>
          <hr />
          <h5>Complexity</h5>
          <p>{story.complexity}</p>
          <hr />
          <h5>Story Type</h5>
          <p>{story.type}</p>
          <hr />
          <h5>Time to Completion</h5>
          <p>{`${story.estimatedHrs} hour`}</p>
        </Modal.Body>
        {isAdmin ? (
          <Modal.Footer>
            <Button onClick={handleRejectAction} className="adminAction" variant="danger">
              Reject
            </Button>
            <Button onClick={handleApproveAction} className="adminAction" variant="success">
              Approve
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default StoryDetails;
