import React from 'react';

const KEY_CODE_SPACE = 32;
const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_DOWN = 40;
const KEY_CODE_UP = 38;

const DIRECTION_MAP = {
  [KEY_CODE_UP]: -1,
  [KEY_CODE_LEFT]: -1,
  [KEY_CODE_DOWN]: 1,
  [KEY_CODE_RIGHT]: 1
};

const RadioButton = ({
  id,
  name,
  label,
  tabIndex,
  disabled,
  onChange,
  checked,
  buttonRefs,
  onArrowChange,
  ...otherProps
}) => {
  const handleKeyDown = e => {
    const diff = DIRECTION_MAP[e.keyCode];

    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
    }

    if (diff) {
      e.preventDefault();
      onArrowChange(diff);
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === KEY_CODE_SPACE) {
      e.preventDefault();
      onChange(id);
    }
  };

  return (
    <div
      role='radio'
      name={name}
      id={`${name}-${id}`}
      tabIndex={tabIndex}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      aria-checked={checked}
      aria-disabled={disabled}
      className='aria-radio-button'
      ref={node => (buttonRefs.current[id] = node)}
      onClick={() => !checked && !disabled && onChange(id)}
      {...otherProps}
    >
      {label}
    </div>
  );
};

export default RadioButton;
