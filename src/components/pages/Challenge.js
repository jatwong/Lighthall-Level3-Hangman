import classes from './Challenge.module.css';
import copy from '../UI/icons/copy.svg';
import { useState } from 'react';
import Header from '../UI/Header';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [newGame, setNewGame] = useState(false);
  const [link, setLink] = useState(
    'http://localhost:3000/shared-game?session=abc123/'
  );

  const enterWord = (e) => {
    setWord(e.target.value);
  };

  const enterDefinition = (e) => {
    setDefinition(e.target.value);
  };

  const createGame = () => {
    setNewGame(true);
    console.log('submitted', word, definition);
  };

  const goBackHandler = () => {
    navigate('/');
  };

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(link);
    console.log('copied');
  };

  let content;

  if (!newGame) {
    content = (
      <>
        <p className={classes.instructions}>
          Pick a word for your friend to guess
        </p>
        <form className={classes.form}>
          <div>
            <label>Enter a word</label>
            <input
              placeholder='Enter a word'
              value={word}
              onChange={enterWord}
            />
          </div>
          <div>
            <label>Enter the word's definition</label>
            <textarea
              placeholder='Enter a definition of the word'
              value={definition}
              onChange={enterDefinition}
            />
          </div>
        </form>
        <button onClick={createGame} className={classes.submit}>
          Create game
        </button>
      </>
    );
  } else {
    content = (
      <div className={classes.share}>
        <p>Your game is ready! Share this link with friends.</p>
        <div className={classes.linkGroup}>
          <p className={classes.link} onClick={copyLinkHandler}>
            {link}
          </p>
          <img
            src={copy}
            onClick={copyLinkHandler}
            alt='copy link'
            className={classes.copy}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header exit={goBackHandler} />
      <div className={classes.page}>
        <p className={classes.title}>Challenge a friend</p>
        {content}
      </div>
    </>
  );
};

export default Challenge;
