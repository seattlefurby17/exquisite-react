import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  if  (props.isRevealed) {
    return ( 
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>

          <div className="FinalPoem__reveal-btn-container">
            <input 
              type="button" value="We are finished: Reveal the Poem" 
              className="FinalPoem__reveal-btn"
              onClick={ props.revealPoem }
            />
            <div>
              {(props.submissions).map((string, index) => (
                <p key={index}>
                  {string}
                </p>
              ))}
            </div>
          </div>
      </div>
    )}
  else {
    return(
    <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn"
            onClick={ props.revealPoem }
          />
        </div>
    </div>
    )}
};

// checking for the types of props that pass in
FinalPoem.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
