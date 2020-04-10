import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isLoggedIn } from '../../utils/helper';
import { Redirect } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer/footer';

const RequireAuth = Component => ({ response }) => {
  return (
    <>
      <Header response={response} />
      {Object.keys(response.data).length > 0 || isLoggedIn ? (
        <Component />
      ) : (
        <Redirect to="/login" />
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  response: auth,
});

const RequireAuthWrapper = compose(connect(mapStateToProps, null), RequireAuth);

export default RequireAuthWrapper;
