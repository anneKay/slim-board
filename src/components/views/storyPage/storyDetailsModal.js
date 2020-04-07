import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { isAdmin } from '../../../utils/helper';

const StoryDetails = ({ show, setShow }) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        {isAdmin ? (
          <Modal.Footer>
            <Button variant="secondary">Approve</Button>
            <Button variant="primary">Reject</Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={setShow(!show)}>
              Close
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default StoryDetails;
