import React, { useState } from 'react';

import Button from 'components/html5/Button';
import Checkbox from 'components/html5/Checkbox';

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
      <fieldset>
        <legend>Which accessibility techniques have you used before?</legend>
        <ul>
          <li>
            <Checkbox
              id="html5-sematic-html-checkbox"
              checked={formState.isSemanticHtmlUsed}
              onClick={() => setState({ isSemanticHtmlUsed: !formState.isSemanticHtmlUsed })}
            >
              Semantic HTML
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-aria-roles-checkbox"
              checked={formState.areAriaRolesUsed}
              onClick={() => setState({ areAriaRolesUsed: !formState.areAriaRolesUsed })}
            >
              ARIA roles
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-subtitles-checkbox"
              checked={formState.areSubtitlesUsed}
              onClick={() => setState({ areSubtitlesUsed: !formState.areSubtitlesUsed })}
            >
              Subtitles for audio / video content
            </Checkbox>
          </li>
          <li>
            <Checkbox
              id="html5-colors-checkbox"
              checked={formState.areColorsUsed}
              onClick={() => setState({ areColorsUsed: !formState.areColorsUsed })}
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
