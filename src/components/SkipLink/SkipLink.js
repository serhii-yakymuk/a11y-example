import React from 'react';
import classnames from 'classnames';

import './SkipLink.css';

const SkipLink = props => {
  const { className, children, ...otherProps } = props;

  return (
    <a
      className={classnames("skip-link", className)}
      {...otherProps}
    >
      {children}
  </a>
  );
}

export default SkipLink;
