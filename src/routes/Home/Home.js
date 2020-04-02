import React from 'react';

import ARIAForm from 'components/aria/Form';
import HTML5Form from 'components/html5/Form';

import './Home.css';

const Home = () => {
  return (
    <>
      <h1>Form Controls Examples</h1>
      <HTML5Form />
      <ARIAForm />
    </>
  );
}

export default Home;
