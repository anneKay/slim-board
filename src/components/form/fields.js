const fields = {
  email: {
    type: 'email',
    name: 'email',
    controlId: 'formBasicEmail',
    text: 'Email',
    placeholder: 'email@mail.com',
    required: true,
    as: 'input',
    rows: '1',
  },
  password: {
    type: 'password',
    name: 'password',
    controlId: 'formBasicPassword',
    text: 'Password',
    required: true,
    as: 'input',
    rows: '1',
  },
  passwordConfirmation: {
    type: 'password',
    name: 'passwordConfirmation',
    controlId: 'formBasicPassword',
    text: 'Confirm Password',
    required: true,
    as: 'input',
    rows: '1',
  },
  summary: {
    type: 'text',
    name: 'summary',
    controlId: 'formSummary',
    text: 'Summary',
    required: true,
    as: 'input',
    rows: '1',
  },
  description: {
    type: 'text',
    name: 'description',
    controlId: 'ControlTextarea1',
    text: 'Description',
    required: true,
    as: 'textarea',
    rows: '3',
  },
  estimatedTime: {
    type: 'text',
    name: 'estimatedTime',
    controlId: 'formTime',
    text: 'Time To Completion',
    required: true,
    as: 'input',
    rows: '1',
  },
  storyType: {
    type: 'text',
    name: 'storyType',
    controlId: 'ControlSelectType',
    text: 'Story Type',
    as: 'select',
    rows: '1',
    options: ['Enhancement', 'BugFix', 'Development', 'QA'],
  },
  complexity: {
    type: 'text',
    name: 'complexity',
    controlId: 'ControlSelectComplexity',
    text: 'Complexity',
    as: 'select',
    rows: '1',
    options: ['Low', 'Mid', 'High'],
  },
};

export const registerForm = [fields.email, fields.password, fields.passwordConfirmation];

export const loginForm = [fields.email, fields.password];

export const createForm = [
  fields.summary,
  fields.description,
  fields.estimatedTime,
  fields.storyType,
  fields.complexity,
];
