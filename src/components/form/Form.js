import React, { useState } from 'react';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';
import '../../stylesheets/form.scss';
import cookieUtil from '../../utils/cookie';

const FormStructure = ({
  formStructure,
  formData,
  setFormData,
  formTitle,
  buttonText,
  onSubmit,
}) => {
  const handleChange = event => {
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = event.target.value;
    setFormData(formDataCopy);
  };
  const [isChecked, setIsChecked] = useState(false);

  const displayLabel = () => {
    cookieUtil.setItem('isAdminUser', isChecked, 30);
    return isChecked ? 'Login As an Admin' : 'Login As a User';
  };

  return (
    <Form onSubmit={onSubmit}>
      {formTitle === 'Login' && (
        <Form.Check
          checked={isChecked}
          type="switch"
          id="custom-switch"
          onChange={event => setIsChecked(event.currentTarget.checked)}
          label={displayLabel()}
        />
      )}
      {formStructure.map(f => (
        <Form.Group controlId={f.controlId} key={f.name}>
          <Form.Label>{f.text}</Form.Label>
          <Form.Control
            type={f.type}
            placeholder={f.placeholder}
            onChange={handleChange}
            required={f.required}
            as={f.as}
            rows={f.rows}
            name={f.name}
          >
            {f.options &&
              f.options.map(option => <option key={`${option}-value`}>{option}</option>)}
          </Form.Control>
        </Form.Group>
      ))}
      {formTitle === 'create' && (
        <Form.Group controlId="formCost">
          <Form.Label>Cost</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              placeholder="Input a number to show story cost"
              aria-describedby="inputGroupPrepend"
              name="cost"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
      )}
      <Button block variant="success" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default FormStructure;
