import React from 'react';

import './Links.css';

const Links = () => {
  return (
    <div className="links-page">
      <h1 id='article-title'>Useful Links</h1>
      <h2>Documentation and Information</h2>
      <ul>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" rel="noopener noreferrer">
            WAI-ARIA spec (for reference only)
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices-1.1/" target="_blank" rel="noopener noreferrer">
            WAI-ARIA Authoring Practices
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/" target="_blank" rel="noopener noreferrer">
            Design Patterns Examples
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/examples/landmarks/" target="_blank" rel="noopener noreferrer">
            Landmarks Examples
          </a>
        </li>
        <li>
          <a href="https://a11yproject.com/" target="_blank" rel="noopener noreferrer">
            A11y Project
          </a>
        </li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>
          <a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh" target="_blank" rel="noopener noreferrer">
            WAVE Evaluation Tool (extension)
          </a>
        </li>
        <li>
          <a href="https://chrispederick.com/work/web-developer/" target="_blank" rel="noopener noreferrer">
            Web Developer (extension)
          </a>
        </li>
        <li>
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y" target="_blank" rel="noopener noreferrer">
            ESLint plugin (eslint-plugin-jsx-a11y)
          </a>
        </li>
        <li>
          <a href="https://github.com/dequelabs/react-axe" target="_blank" rel="noopener noreferrer">
            React aXe (library)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
