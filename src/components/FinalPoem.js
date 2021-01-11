import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const content = (props.isRevealed) ? (
              <section className="FinalPoem__poem">
                <h3>Final Poem</h3>
                <div>
                  {(props.submissions).map((string, index) => (
                    <p key={index}>
                      {string}
                    </p>
                  ))}
                </div>
              </section>
  ) : (
              <div className="FinalPoem__reveal-btn-container">
                <input 
                  type="button" value="We are finished: Reveal the Poem" 
                  className="FinalPoem__reveal-btn"
                  onClick={ props.revealPoem }
                />
              </div>
  );
  return (
          <div className="FinalPoem">
            {content}
          </div>
  );
};

// checking for the types of props that pass in
FinalPoem.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
