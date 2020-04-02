import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

export const KEY_CODE_SPACE = 32;

const Checkbox = props => {
  const { children, className, disabled, checked, onClick = () => {}, ...otherProps } = props;

  const handleKeyDown = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
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
      role="checkbox"
      onClick={onClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? null : 0}
      className={classnames('aria-checkbox', className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Checkbox;
