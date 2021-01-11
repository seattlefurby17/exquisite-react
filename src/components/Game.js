import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' '); //this is a string

  const [poemLines, setPoemLines] = useState([]); //equivalent of a constant variable 

  const getPlayerSubmission = (newLine) => { //update the state of poemLines
    const { adj1, noun1, adv, verb, adj2, noun2 } = newLine; // destructuring
    const newLineValue = 'The ' + adj1 + ' ' + noun1 + ' ' + adv + ' ' + verb + ' the ' + adj2 + ' ' + noun2 + '.'
    console.log(newLineValue)
    const newLines = [...poemLines];
    newLines.push(newLineValue);
    setPoemLines(newLines);
  }

  const[isRevealed, setIsRevealed] = useState(false); //keep track if the player has submitted/not

  const revealPoem = (event) => {
    setIsRevealed(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be 
        done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. 
        When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {/* only show the latest submission/ last item in the array */}
      <RecentSubmission submission={ poemLines[poemLines.length -1] || '' } />

      <PlayerSubmissionForm 
        fields={ FIELDS } sendSubmission={ getPlayerSubmission } index={ poemLines.length + 1} /> 

      <FinalPoem revealPoem={ revealPoem } isRevealed={ isRevealed } submissions={ poemLines } />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
