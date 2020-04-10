import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { isAdmin } from '../../../utils/helper';

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
      {!isAdmin && (
        <div className={classNames('sideBarLink', { closedSideBarItems: !sideBarVisible })}>
          <span>
            <FontAwesomeIcon icon="plus" size="1x" />
          </span>
          <a href="/create">Create Story</a>
        </div>
      )}
      <div className={classNames('sideBarLink', { closedSideBarItems: !sideBarVisible })}>
        <span>
          <FontAwesomeIcon icon="globe-europe" size="1x" />
        </span>
        <a href="/">Explore</a>
      </div>
    </section>
  );
};

export default SideBar;
