import React from 'react';
import classnames from 'classnames';

import './Button.css';

export const KEY_CODE_ENTER = 13;
export const KEY_CODE_SPACE = 32;

const Button = props => {
  const { children, className, disabled, onClick = () => {}, ...otherProps } = props;

  const handleKeyDown = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
    } else if (e.keyCode === KEY_CODE_ENTER) {
      e.preventDefault();
      onClick(e);
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      role="button"
      onClick={onClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      tabIndex={disabled ? null : 0}
      className={classnames('aria-button', disabled && 'aria-button--disabled', className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
