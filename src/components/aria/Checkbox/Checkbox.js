import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

export const KEY_CODE_SPACE = 32;

const Checkbox = props => {
  const { children, className, disabled, checked, onChange = () => {}, ...otherProps } = props;

  const handleKeyDown = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
      onChange(e);
    }
  };

  return (
    <div
      role="checkbox"
      onClick={e => {
        if (!disabled) {
          onChange(e);
        }
      }}
      onKeyUp={handleKeyUp}
      onKeyDownCapture={handleKeyDown}
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
