import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
  text,
  type,
  placeholder = text,
  handleChange,
  name,
  id = name,
  required = false,
  controlId,
}) => {
  // const showBasicIdType = (basicIdType) => {
  //   if (basicIdType === email)
  // }
  return (
    <>
      {/* <label htmlFor={id}>{text}</label>
      <input
        className="input class"
        required={required}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      /> */}
      <Form.Group controlId={controlId}>
        <Form.Label>{text}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    </>
  );
};

export default Input;
