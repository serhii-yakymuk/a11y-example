import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <>
      <h1>Form Controls Examples</h1>
      <form aria-labelledby="html-form-description">
        <h2 id="html-form-description">HTML 5 Controls</h2>
      </form>
      <form aria-labelledby="aria-form-description">
        <h2 id="aria-form-description">WAI-ARIA Controls</h2>
      </form>
    </>
  );
}

export default Home;
