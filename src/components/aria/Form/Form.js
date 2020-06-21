import React, { useState } from 'react';

import Button from 'components/aria/Button';
import Checkbox from 'components/aria/Checkbox';
import RadioGroup from 'components/aria/RadioGroup';

import './Form.css';

const RADIO_GROUP_ITEMS = [
  {
    id: 1,
    label: 'None'
  },
  {
    id: 2,
    label: 'Have some knowledge of web layouts'
  },
  {
    id: 3,
    label: 'Junior Web Developer'
  },
  {
    id: 4,
    label: 'JavaScript Guru'
  }
]

const Form = () => {
  const [formState, setFormState] = useState({
    isSemanticHtmlUsed: false,
    areAriaRolesUsed: false,
    areSubtitlesUsed: false,
    areColorsUsed: false,
    experience: null
  });

  const setState = data =>
    setFormState(prevState => ({
      ...prevState,
      ...data
    }));

  const onSubmit = e => {
    console.log('form submitted (ARIA)');
  };

  return (
    <div
      role="form"
      className="aria-form"
      aria-labelledby="aria-form-label"
    >
      <h2 id="aria-form-label">WAI-ARIA Survey</h2>
      <RadioGroup
        items={RADIO_GROUP_ITEMS}
        value ={formState.experience}
        name="aria-experience-radio-group"
        onChange={experience => setState({ experience })}
        label="What is your current experience with front end?"
      />
      <div role="group" aria-labelledby="aria-techniques-label">
        <h3 id="aria-techniques-label">Which accessibility techniques have you used before?</h3>
        <ul>
          <li>
            <Checkbox
              id="aria-sematic-html-checkbox"
              checked={formState.isSemanticHtmlUsed}
              onChange={() => setState({ isSemanticHtmlUsed: !formState.isSemanticHtmlUsed })}
            >
              Semantic HTML
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-aria-roles-checkbox"
              checked={formState.areAriaRolesUsed}
              onChange={() => setState({ areAriaRolesUsed: !formState.areAriaRolesUsed })}
            >
              ARIA roles
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-subtitles-checkbox"
              checked={formState.areSubtitlesUsed}
              onChange={() => setState({ areSubtitlesUsed: !formState.areSubtitlesUsed })}
            >
              Subtitles for audio / video content
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-colors-checkbox"
              checked={formState.areColorsUsed}
              onChange={() => setState({ areColorsUsed: !formState.areColorsUsed })}
            >
              Checks for color contranst and color blindness
            </Checkbox>
          </li>
        </ul>
      </div>
      <Button
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
