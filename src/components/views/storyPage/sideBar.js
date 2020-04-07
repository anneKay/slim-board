import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const SideBar = ({ sideBarVisible, setSideBarVisible }) => {
  return (
    <section className={classNames('sideBar', { closedSideBar: !sideBarVisible })}>
      <span className="closeSideContainer">
        <FontAwesomeIcon
          icon="chevron-circle-left"
          size="1x"
          onClick={() => setSideBarVisible(!sideBarVisible)}
        />
      </span>
      <div className={classNames('createStory', { closedSideBarItems: !sideBarVisible })}>
        <span>
          <FontAwesomeIcon icon="plus" size="1x" />
        </span>
        <p>Create Story</p>
      </div>
    </section>
  );
};

export default SideBar;
