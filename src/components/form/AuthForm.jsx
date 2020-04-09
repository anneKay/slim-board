import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Form from './Form';
import Header from '../header';
import Footer from '../footer/footer';
import { loginUser } from '../../actions/authActions';
import { createStory } from '../../actions/storyActions';

const AuthenticationForm = ({
  action,
  loginUser,
  createStory,
  history,
  formTitle,
  formStructure,
  buttonText,
  data,
}) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formAction = data => {
    switch (action) {
      case 'create':
        return createStory(history, data);
      case 'login':
        return loginUser(history, data);
      default:
        console.log('Something went wrong');
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    formAction(formData)
      .then(() => {
        setIsLoading(false);
        history.push('/');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="formContainer">
        {isLoading && (
          <Spinner animation="border" size="lg" variant="success" role="status"></Spinner>
        )}
        <Form
          onSubmit={onSubmit}
          formTitle={formTitle}
          setFormData={setFormData}
          formStructure={formStructure}
          formData={formData}
          buttonText={buttonText}
        />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  data: auth,
});

export default connect(mapStateToProps, { loginUser, createStory })(withRouter(AuthenticationForm));
