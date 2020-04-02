import React from 'react';
import classnames from 'classnames';

import './Button.css';

const Button = props => {
  const { children, className, ...otherProps } = props

  return (
    <button
      className={classnames('html5-button', className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
