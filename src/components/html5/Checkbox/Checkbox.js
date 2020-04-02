import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

const Checkbox = props => {
  const { id, children, className, disabled, checked, ...otherProps } = props;

  return (
    <div className={'html5-checkbox-wrapper'}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={classnames('html5-checkbox', className)}
        {...otherProps}
      />
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
