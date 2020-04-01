import React, { Component, useState } from 'react';

const FormHOC = WrappedComponent => {
  // state = {
  //   user: {
  //     username: '',
  //     email: '',
  //     password: '',
  //   },
  //   errors: {},
  //   loading: false,
  //   open: false,
  // };

  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    const { submitForm } = this.props;
    this.setState({ loading: true });
    return submitForm({ user }).catch(err => {
      const newErrors = Object.assign({}, ...err.response.data.errors.body);
      const { usernameError, passwordError, emailError } = newErrors;
      // if (typeof err.response.data.errors.body[0] !== 'object') {
      //   this.setState({
      //     errors: { randomError: err.response.data.errors.body[0] },
      //     loading: false,
      //   });
      // } else {
      //   this.setState({
      //     errors: {
      //       usernameError,
      //       passwordError,
      //       emailError,
      //     },
      //     loading: false,
      //   });
      // }
    });
  };

  handleChange = e => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value,
      },
      errors: {},
    });
  };
  return (
    <WrappedComponent
      state={this.state}
      show={this.show}
      close={this.close}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      {...this.props}
    />
  );
};
/* eslint-enable */
export default FormHOC;
