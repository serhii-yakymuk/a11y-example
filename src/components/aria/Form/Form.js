import React, { useState } from 'react';

import Button from 'components/aria/Button';

import './Form.css';

const Form = () => {
  const [formState, setFormState] = useState({});

  const onSubmit = e => {
    console.log('form submitted (ARIA)');
  };

  return (
    <div
      role="form"
      aria-labelledby="aria-form-description"
    >
      <h2 id="aria-form-description">WAI-ARIA Survey</h2>
      <Button
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
