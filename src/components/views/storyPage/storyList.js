import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';
import StoryContainer from './storyContainer';
import { fetchStories } from '../../../actions/storyActions';
import { userData, isAdmin } from '../../../utils/helper';

const StoryList = ({ fetchStories }) => {
  const [storyData, setStoryData] = useState('');
  const [isActive, setIsActive] = useState(0);
  const [narrowedData, setNarrowedData] = useState('');
  const [storiesLoaded, setStoriesLoaded] = useState(false);

  const isUserStory = story => {
    return story.createdBy === userData.id;
  };

  const showStoryByStatus = listHeader => {
    if (listHeader === 'Rejected') {
      return storyData.length && storyData.filter(story => story.status === 'rejected');
    } else if (listHeader === 'Approved') {
      return storyData.length && storyData.filter(story => story.status === 'approved');
    } else {
      return storyData;
    }
  };

  const setHeaderItem = (list, index) => {
    setNarrowedData(showStoryByStatus(list));
    setIsActive(index);
  };

  useEffect(() => {
    if (!storiesLoaded) {
      function fetchData() {
        fetchStories()
          .then(result => {
            if (isAdmin && result) {
              setStoryData(result);
              setNarrowedData(result);
            } else if (result) {
              setStoryData(result.filter(story => isUserStory(story)));
              setNarrowedData(result.filter(story => isUserStory(story)));
            }
            setStoriesLoaded(true);
          })
          .catch(() => {
            setStoriesLoaded(true);
          });
      }
      fetchData();
    }
  }, [storyData, storiesLoaded]);

  const headerList = ['Stories', 'Approved', 'Rejected'];

  return (
    <div className="storyListContainer">
      <ul className="storyHeader">
        {headerList.map((list, index) => (
          <li
            key={index}
            className={classNames({ active: isActive === index })}
            onClick={() => setHeaderItem(list, index)}
          >
            {list}
          </li>
        ))}
      </ul>
      <section className="storyCardWrapper">
        {storiesLoaded ? (
          <StoryContainer stories={narrowedData} />
        ) : (
          <Spinner animation="border" size="lg" variant="success" role="status"></Spinner>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = ({ story, auth }) => ({
  data: story,
  userDetails: auth,
});

export default connect(mapStateToProps, { fetchStories })(withRouter(StoryList));
