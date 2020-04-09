import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { isAdmin } from '../../../utils/helper';
import '../../../stylesheets/story/story-details.scss';

const StoryDetails = ({ story, show, handleShow, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{story.description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Button className="adminAction" variant="danger">
              Reject
            </Button>
            <Button className="adminAction" variant="success">
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
