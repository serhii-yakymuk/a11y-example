import React, { useState } from 'react';

import Button from 'components/html5/Button';

import './Form.css';

const Form = () => {
  const [formState, setFormState] = useState({});

  return (
    <form
      method="get"
      aria-labelledby="html-form-description"
      onSubmit={e => {
        e.preventDefault();
        console.log('form submitted (HTML5)');
      }}
    >
      <h2 id="html-form-description">HTML 5 Survey</h2>
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
