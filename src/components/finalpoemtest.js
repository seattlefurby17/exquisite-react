const FinalPoem = (props) => {
  
    if  (props.isRevealed) {
  
      //event handler
      const showButton= (event) => {
  
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
            <section>
              {(props.submissions).map((string, index) => (
                <p key={index}>
                  {string}
                </p>
              ))}
            </section>
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