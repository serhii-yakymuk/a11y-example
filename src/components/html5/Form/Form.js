import React, { useState } from 'react';

import Button from 'components/html5/Button';
import Checkbox from 'components/html5/Checkbox';
import RadioGroup from 'components/html5/RadioGroup';

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
    e.preventDefault();
    console.log('form submitted (HTML5)');
  };

  return (
    <form
      method="get"
      onSubmit={onSubmit}
      className="html5-form"
      aria-labelledby="html5-form-label"
    >
      <h2 id="html5-form-label">HTML 5 Survey</h2>
      <RadioGroup
        items={RADIO_GROUP_ITEMS}
        value ={formState.experience}
        name="html5-experience-radio-group"
        onChange={experience => setState({ experience })}
        label="What is your current expirience with front end?"
      />
      <fieldset>
        <legend>
          <h3>Which accessibility techniques have you used before?</h3>
        </legend>
        <ul>
          <li>
            <Checkbox
              id="html5-sematic-html-checkbox"
              checked={formState.isSemanticHtmlUsed}
              onChange={() => setState({ isSemanticHtmlUsed: !formState.isSemanticHtmlUsed })}
            >
              Semantic HTML
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-aria-roles-checkbox"
              checked={formState.areAriaRolesUsed}
              onChange={() => setState({ areAriaRolesUsed: !formState.areAriaRolesUsed })}
            >
              ARIA roles
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-subtitles-checkbox"
              checked={formState.areSubtitlesUsed}
              onChange={() => setState({ areSubtitlesUsed: !formState.areSubtitlesUsed })}
            >
              Subtitles for audio / video content
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-colors-checkbox"
              checked={formState.areColorsUsed}
              onChange={() => setState({ areColorsUsed: !formState.areColorsUsed })}
            >
              Checks for color contranst and color blindness
            </Checkbox>
          </li>
        </ul>
      </fieldset>
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
