import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import StoryContainer from './storyContainer';
import { fetchStories } from '../../../actions/storyActions';
import cookieUtil from '../../../utils/cookie';

const StoryList = ({ history, fetchStories, userDetails }) => {
  const [storyData, setStoryData] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const stories = [
    {
      createdBy: 2,
      status: 'approved',
      summary: '1st story created by 2',
      description: 'dummy desc',
      type: 'enhancement',
      complexity: 'high',
      estimatedHrs: 1,
      cost: 100,
    },
    {
      createdBy: 2,
      status: 'approved',
      summary: '2nd story created by 2',
      description: 'dummy desc',
      type: 'enhancement',
      complexity: 'high',
      estimatedHrs: 1,
      cost: 100,
    },
    {
      createdBy: 3,
      status: 'rejected',
      summary: 'story created by 3',
      description: 'dummy desc',
      type: 'enhancement',
      complexity: 'high',
      estimatedHrs: 1,
      cost: 100,
    },
  ];

  const isUserStory = story => {
    const userData = JSON.parse(cookieUtil.getItem('userData'));
    if (userData.userRoles && userData.userRoles[0] === 'Admin') return true;
    return story.createdBy === userData.id;
  };
  const [narrowedData, setNarrowedData] = useState(stories.filter(story => isUserStory(story)));

  const showStoryByStatus = listHeader => {
    if (listHeader === 'Rejected') {
      return stories.filter(story => story.status === 'rejected' && isUserStory(story));
    } else if (listHeader === 'Approved') {
      return stories.filter(story => story.status === 'approved' && isUserStory(story));
    } else {
      return stories.filter(story => isUserStory(story));
    }
  };

  const setHeaderItem = (list, index) => {
    setNarrowedData(showStoryByStatus(list));
    setIsActive(index);
  };

  const getStoryList = () => {
    fetchStories().then(response => {
      console.log(response);
      setStoryData(response);
    });
  };

  // useEffect(() => {
  //   if (!storyData) {
  //     async function fetchData() {
  //       const result = await fetchStories();
  //       setStoryData(result);
  //       console.log('amhere');
  //     }
  //       fetchData();
  //     }
  // }, [ storyData ]
  // );

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
        <StoryContainer stories={narrowedData} />
      </section>
    </div>
  );
};

const mapStateToProps = ({ story, auth }) => ({
  data: story,
  userDetails: auth,
});

export default connect(mapStateToProps, { fetchStories })(withRouter(StoryList));
