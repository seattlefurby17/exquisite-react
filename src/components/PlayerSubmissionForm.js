import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [poems, updatePoems] = useState({
    submission1: '',
    submission2: '',
    submission3: '',
    submission4: '',
    submission5: '',
    submission6: '',

    // adjective: '',
    // noun: '',
    // adverb: '',
    // verb: '',
    // adjective: '',
    // noun: ''
  });

  //event handlers
  const onInputChange = (event) => {
  
  const newPlayerSubmission = {
    ...poems
  };

  const {fieldName, fieldValue} =  event.target

  // This sets newformFields to the old value of the form state
  // and then updates the one field that changed.
  newPlayerSubmission[fieldName] = fieldValue; // updated the value using the hash key
  updatePoems(newPlayerSubmission);  // updated the form with new values
  }

  //event listener
  const onFormPoemSubmission = (event) => {
    // prevent the form from being submitted
    event.preventDefault();
    // print user data
    console.log(poems);
    // clear the submission
    updatePoems({
      submission1: '',
      submission2: '',
      submission3: '',
      submission4: '',
      submission5: '',
      submission6: '',
    });
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            placeholder="hm..."
            type="text" 
            onChange={ onInputChange }
            />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
