import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import Header from '../header';
import Footer from '../footer/footer';
// import {
//   registerUser,
//   signInUser
// } from "../../store/config/redux-token-auth-config";

const AuthenticationForm = props => {
  const [formData, setFormData] = useState({});
  const action = data => {
    switch (props.action) {
      case 'signup':
        // return props.signupUser(data);
        return 'signup';
      case 'login':
        // return props.signInUser(data);
        return 'signin';
      default:
        console.log('Something went wrong');
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    // action(formData)
    //   .then(() => {
    //     props.history.push("/");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    console.log('I just got submitted');
  };

  return (
    <>
      <Header />
      <Form
        onSubmit={onSubmit}
        formTitle={props.formTitle}
        setFormData={setFormData}
        formStructure={props.formStructure}
        formData={formData}
        buttonText={props.buttonText}
      />
      <Footer />
    </>
  );
};

export default connect(
  null,
  // { registerUser, signInUser }
)(withRouter(AuthenticationForm));
