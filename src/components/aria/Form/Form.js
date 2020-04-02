import React, { useState } from 'react';

import Button from 'components/aria/Button';
import Checkbox from 'components/aria/Checkbox';

import './Form.css';

const Form = () => {
  const [formState, setFormState] = useState({
    isSemanticHtmlUsed: false,
    areAriaRolesUsed: false,
    areSubtitlesUsed: false,
    areColorsUsed: false
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
      <div role="group" aria-labelledby="aria-techniques-label">
        <h3 id="aria-techniques-label">Which accessibility techniques have you used before?</h3>
        <ul>
          <li>
            <Checkbox
              id="aria-sematic-html-checkbox"
              checked={formState.isSemanticHtmlUsed}
              onClick={() => setState({ isSemanticHtmlUsed: !formState.isSemanticHtmlUsed })}
            >
              Semantic HTML
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-aria-roles-checkbox"
              checked={formState.areAriaRolesUsed}
              onClick={() => setState({ areAriaRolesUsed: !formState.areAriaRolesUsed })}
            >
              ARIA roles
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-subtitles-checkbox"
              checked={formState.areSubtitlesUsed}
              onClick={() => setState({ areSubtitlesUsed: !formState.areSubtitlesUsed })}
            >
              Subtitles for audio / video content
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="aria-colors-checkbox"
              checked={formState.areColorsUsed}
              onClick={() => setState({ areColorsUsed: !formState.areColorsUsed })}
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
