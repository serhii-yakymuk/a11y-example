import React from 'react';

const RadioButton = ({
  id,
  name,
  label,
  checked,
  disabled,
  ...otherProps
}) => {
  return (
    <div className='html5-radio-button-wrapper'>
      <input
        value={id}
        name={name}
        type='radio'
        checked={checked}
        aria-label={label}
        disabled={disabled}
        id={`${name}-${id}`}
        className='html5-radio-button'
        {...otherProps}
      />
      <label htmlFor={`${name}-${id}`}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
