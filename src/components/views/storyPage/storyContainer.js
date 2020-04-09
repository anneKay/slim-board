import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import StoryDetails from './storyDetailsModal';
import '../../../stylesheets/story/storycontainer.scss';

const StoryContainer = ({ stories }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showBorderColor = status => {
    if (status === 'approved') {
      return 'success';
    } else if (status === 'rejected') {
      return 'danger';
    } else {
      return 'dark';
    }
  };
  return (
    <>
      {stories.length > 0 ? (
        stories.map(story => (
          <div>
            <Card border={showBorderColor(story.status)} onClick={handleShow}>
              <Card.Header as="h5">{story.description}</Card.Header>
              <Card.Body>
                <Card.Text>{story.summary}</Card.Text>
                <Card.Text>{`Complexity: ${story.complexity}`}</Card.Text>
              </Card.Body>
            </Card>
            <StoryDetails
              story={story}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
              setShow={setShow}
            />
          </div>
        ))
      ) : (
        <div>
          <h5> Sorry, there is nothing here!</h5>{' '}
        </div>
      )}
    </>
  );
};

export default StoryContainer;
