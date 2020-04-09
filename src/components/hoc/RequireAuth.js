import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isLoggedIn } from '../../utils/helper';
import LandingPage from '../views/LandingPage';
import Header from '../header';
import Footer from '../footer/footer';
// import Loader from '../common/Loader';

const RequireAuth = Component => ({ response }) => {
  return (
    <>
      {console.log(isLoggedIn, '>>>>>>>>>.')}
      <Header />
      {Object.keys(response.data).length > 0 || isLoggedIn ? <Component /> : <LandingPage />}
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  response: auth,
});

const RequireAuthWrapper = compose(connect(mapStateToProps, null), RequireAuth);

export default RequireAuthWrapper;
