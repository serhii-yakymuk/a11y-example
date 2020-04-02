import React from 'react';

import RadioButton from './RadioButton';

import './RadioGroup.css';

const RadioGroup = ({
  name,
  label,
  value,
  items,
  onChange,
  disabled
}) => {
  return (
    <div
      id={name}
      role='radiogroup'
      className='html5-radio-group'
      aria-labelledby={`${name}-label`}
    >
      <h3 id={`${name}-label`}>
        {label}
      </h3>
      <ul>
        {items.map(({ label, id }) => (
          <li key={id}>
            <RadioButton
              id={id}
              name={name}
              label={label}
              disabled={disabled}
              checked={value === id}
              onChange={() => onChange(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroup;
