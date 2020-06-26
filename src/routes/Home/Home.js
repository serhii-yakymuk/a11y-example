import React from 'react';

import ARIAForm from 'components/aria/Form';
import HTML5Form from 'components/html5/Form';
import WindowRoles from 'components/WindowRoles';
import LiveRegionRoles from 'components/LiveRegionRoles';

import './Home.css';

const Home = () => {
  return (
    <>
      <h1 id='article-title'>Controls Examples</h1>
      <HTML5Form />
      <ARIAForm />
      <WindowRoles />
      <LiveRegionRoles />
      <section>
        <h3 id='very-int-article-title'>Other Article</h3>
        <p>
          mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a
          href='/article'
          aria-labelledby='very-int-article-title read-more'
        >
          <span id='read-more'>Read More</span>
        </a>
      </section>
    </>
  );
}

export default Home;
