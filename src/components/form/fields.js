const fields = {
  email: {
    type: 'email',
    name: 'email',
    controlId: 'formBasicEmail',
    text: 'Email',
    placeholder: 'email@mail.com',
    required: true,
  },
  password: {
    type: 'password',
    name: 'password',
    controlId: 'formBasicPassword',
    text: 'Password',
    required: true,
  },
  passwordConfrimation: {
    type: 'password',
    name: 'passwordConfirmation',
    controlId: 'formBasicPassword',
    text: 'Confirm Password',
    required: true,
  },
};

export const registerForm = [fields.email, fields.password, fields.passwordConfrimation];

export const loginForm = [fields.email, fields.password];
