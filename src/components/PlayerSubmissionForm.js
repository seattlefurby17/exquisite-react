import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const setInitialState = () => {
    const initialStateValue = {};
    props.fields.forEach((field) => {
      if (field.key) initialStateValue[field.key] = '';
    })
    return initialStateValue;
  }

  const [words, updateWords] = useState(setInitialState());

  //event handlers
  const onInputChange = (event) => {
  
  const newPlayerSubmission = {
    ...words
  };

  const {fieldName, fieldValue} =  event.target

  // This sets newformFields to the old value of the form state
  // and then updates the one field that changed.
  newPlayerSubmission[fieldName] = fieldValue; // updated the value using the hash key
  updateWords(newPlayerSubmission);  // updated the form with new values
  }

  //event listener
  const onFormWordSubmission = (event) => {
    // prevent the form from being submitted
    event.preventDefault();
    // print user data
    console.log(words);
    // pass data to App
    props.sendSubmission(words)
    // clear the submission
    updateWords(setInitialState());
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
