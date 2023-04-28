import Header from '../UI/Header';

import classes from './Challenge.module.css';
import copy from '../UI/icons/copy.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');
  const [newGame, setNewGame] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('');

  const [link, setLink] = useState(
    'http://localhost:3000/shared-game?session=abc123/'
  );

  const enterWord = (e) => {
    setWord(e.target.value);
  };

  const submitWord = (e) => {
    if (e.keycode === 13 || e.key === 'Enter') {
      createGame()
    }
  };

  let valid = false;
  const hasSpaces = new RegExp(/\s/);

  if (word !== '') {
    valid = true;
  }

  const createGame = () => {
    setHasError(false);

    if (hasSpaces.test(word)) {
      setHasError(true);
      setMessage('The word cannot have spaces.');
    } else if (valid) {
      fetch('https://hangmanserver.jayraval20.repl.co/single-game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: word,
          definition: "",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNewGame(true);
          setLink('https://lighthall-team60-hangman.vercel.app/shared-game/' + data.url);
        });
    }
  };

  const goBackHandler = () => {
    navigate('/');
  };

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(link);
  };

  let content;

  if (!newGame) {
    content = (
      <>
        <p className={classes.instructions}>
          Pick a word for your friend to guess
        </p>
        <div className={classes.error}>{hasError && message}</div>
        <div className={classes.form}>
          <div>
            <label>Enter a word</label>
            <input
              placeholder='Enter a word'
              value={word}
              onChange={enterWord}
              onKeyUp={submitWord}
              maxLength='20'
            />
          </div>
          {/* <div>
            <label>Enter the word's definition</label>
            <textarea
              placeholder='Enter a definition of the word'
              value={definition}
              onChange={enterDefinition}
            />
          </div> */}
        </div>
        <button
          onClick={createGame}
          className={classes.submit}
          disabled={!valid}
        >
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
      <Header end={goBackHandler} />
      <div className={classes.page}>
        <p className={classes.title}>Challenge a friend</p>
        {content}
      </div>
    </>
  );
};

export default Challenge;
