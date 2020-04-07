import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import Header from '../header';
import Footer from '../footer/footer';
import { loginUser } from '../../actions/authActions';

const AuthenticationForm = ({
  action,
  loginUser,
  history,
  formTitle,
  formStructure,
  buttonText,
  data,
}) => {
  const [formData, setFormData] = useState({});
  const formAction = data => {
    switch (action) {
      // case 'signup':
      //   return props.signupUser(data);
      case 'login':
        return loginUser(history, data);
      default:
        console.log('Something went wrong');
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    formAction(formData)
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Form
        onSubmit={onSubmit}
        formTitle={formTitle}
        setFormData={setFormData}
        formStructure={formStructure}
        formData={formData}
        buttonText={buttonText}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  data: auth,
});

export default connect(mapStateToProps, { loginUser })(withRouter(AuthenticationForm));
