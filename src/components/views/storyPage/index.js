import React, { useState } from 'react';
import SideBar from './sideBar';
import StoryList from './storyList';
import '../../../stylesheets/story/story.scss';
import classNames from 'classnames';

const StoryPage = () => {
  const [sideBarVisible, setSideBarVisible] = useState(true);
  return (
    <>
      <div
        className="storyWrapper"
        className={classNames('storyWrapper', { expandedStoryWrapper: !sideBarVisible })}
      >
        <SideBar sideBarVisible={sideBarVisible} setSideBarVisible={setSideBarVisible} />
        {/* <section className="mainSection">
      </section> */}
        <StoryList />
      </div>
    </>
  );
};

export default StoryPage;
