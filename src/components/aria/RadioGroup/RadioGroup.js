import React, { useRef } from 'react';

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
  const buttonRefs = useRef({});
  const isAnyItemSelected = items.some(i => i.id === value);

  const onArrowChange = (index, diff) => {
    index += diff;

    if (index < 0) {
      index = items.length - 1;
    } else if (index === items.length) {
      index = 0;
    }

    const selectedValue = items[index].id;
    const selectedNode = buttonRefs.current[selectedValue];

    onChange(selectedValue);
    selectedNode.focus();
  };

  const getTabIndex = (checked, index) => {
    if (disabled) {
      return null;
    }
    return checked || (!isAnyItemSelected && index === 0) ? 0 : -1;
  }

  return (
    <div
      id={name}
      role='radiogroup'
      className='aria-radio-group'
      aria-labelledby={`${name}-label`}
    >
      <h3 id={`${name}-label`}>
        {label}
      </h3>
      {items.map(({ label, id }, index) => (
        <RadioButton
          id={id}
          key={id}
          name={name}
          label={label}
          onChange={onChange}
          disabled={disabled}
          buttonRefs={buttonRefs}
          checked={value === id}
          tabIndex={getTabIndex(value === id, index)}
          onArrowChange={diff => onArrowChange(index, diff)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
