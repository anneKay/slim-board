import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';
import StoryContainer from './storyContainer';
import { fetchStories } from '../../../actions/storyActions';
import { userData, isAdmin } from '../../../utils/helper';

const StoryList = ({ fetchStories }) => {
  const [storyData, setStoryData] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [narrowedData, setNarrowedData] = useState('');

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
    if (!storyData) {
      async function fetchData() {
        const result = await fetchStories();
        if (!result) setIsLoading('false');
        if (isAdmin) {
          setStoryData(result);
          setNarrowedData(result);
          setIsLoading(false);
        } else {
          if (result) {
            setStoryData(result.filter(story => isUserStory(story)));
            setNarrowedData(result);
          }
          setIsLoading(false);
        }
      }
      fetchData();
    }
  }, [storyData]);

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
        {isLoading ? (
          <Spinner animation="border" size="lg" variant="success" role="status"></Spinner>
        ) : (
          <StoryContainer stories={narrowedData} />
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
