import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const setInitialState = () => {
    const initialStateValue = {}; //this is an object with an ability to set key like hash
    for ( const field of props.fields ) {
      if (field.key) {// if this is true
        initialStateValue[field.key] = ''; //set key and value
      }
    }
    return initialStateValue;

  }

  const [words, updateWords] = useState(setInitialState());

  //event handlers
  const onInputChange = (event) => {
  
    const newPlayerSubmission = {
      ...words 
    };

    const { name, value } =  event.target

    // This sets newformFields to the old value of the form state
    // and then updates the one field that changed.
    newPlayerSubmission[name] = value; // updated the value using the hash key
    updateWords(newPlayerSubmission);  // updated the form with new values
  }

  //event listener
  const onFormWordSubmission = (event) => {
    // prevent the form from being submitted
    event.preventDefault();
    // print user data
    console.log(words);
    // pass data to Game
    props.sendSubmission(words)
    // clear the submission, get ready for the next player
    updateWords(setInitialState()); 
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormWordSubmission}>
        <div className="PlayerSubmissionForm__poem-inputs">
          <p>The</p>
          <input
            placeholder="adjective"
            type="text"
            name='adj1'
            value={ words.adj1 } 
            onChange={ onInputChange }
            />
          <input
            placeholder="noun"
            type="text"
            name='noun1'
            value={ words.noun1 } 
            onChange={ onInputChange }
            />
          <input
            placeholder="adverb"
            type="text"
            name='adv'
            value={ words.adv } 
            onChange={ onInputChange }
            />
          <input
            placeholder="verb"
            type="text"
            name='verb'
            value={ words.verb } 
            onChange={ onInputChange }
            />
            <p>the</p>
          <input
            placeholder="adjective"
            type="text"
            name='adj2'
            value={ words.adj2 } 
            onChange={ onInputChange }
            />
          <input
            placeholder="noun"
            type="text"
            name='noun2'
            value={ words.noun2 } 
            onChange={ onInputChange }
            />
            <p>.</p>
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
