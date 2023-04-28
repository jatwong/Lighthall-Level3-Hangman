import Game from './game';
import Header from '../UI/Header';

import enter from '../UI/icons/arrow-right-circle 1.svg';
import classes from './RankGameLogin.module.css';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const RankGameLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [word, setWord] = useState('');
  const [guesses_left, setGuessesLeft] = useState(8);
  const [guessedLetters, setGuessedLetters] = useState('');
  const [hints_left, setHintsLeft] = useState(3);

  const fetchWord = (id) => {
    setLoading(true);

    fetch(`https://hangmanserver.jayraval20.repl.co/word/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonbody) => {
        setScore(jsonbody.score);
        setWord(jsonbody.word);
        setGuessesLeft(jsonbody.guesses_left);
        setGuessedLetters(jsonbody.letters_guessed);
        setHintsLeft(jsonbody.hints_left);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let id = Cookies.get('userid');
    let name = Cookies.get('username');
    setUserId(id || '');
    setUsername(name || '');
    setLoggedIn(id ? true : false);

    if (id) {
      fetchWord(id);
    }
  }, [userId]);

  const navigate = useNavigate();

  const newPlayer = (e) => {
    setUsername(e.target.value);
  };

  let valid = false;
  if (username !== '') {
    valid = true;
  }

  const enterName = (e) => {
    if (valid) {
      if (e.keycode === 13 || e.key === 'Enter') {
        onSubmit();
      }
    } else {
      setHasError(true);
      setErrorMsg('Please enter your name');
    }
  };

  const onSubmit = () => {
    if (valid) {
      fetch('https://hangmanserver.jayraval20.repl.co/newplayer', {
        method: 'POST',
        body: JSON.stringify({
          newplayer: username,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((jsonbody) => {
          Cookies.set('userid', jsonbody.user_id, { expires: 7 });
          Cookies.set('username', username, { expires: 7 });
          setLoggedIn(true);
          setUserId(jsonbody.user_id);
        });
    }
  };

  const goBackHandler = () => {
    navigate('/');
  };

  const endGameHandler = () => {
    navigate('/');
    Cookies.remove('userid');
    Cookies.remove('username');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  let page;
  if (!loggedIn) {
    page = (
      <>
        <Header end={goBackHandler} />
        <div className={classes.page}>
          <div className={classes.inputDiv}>
            <p className={classes.label}>Enter your name</p>
            <div className={classes.error}>{hasError && errorMsg}</div>
            <input
              className={classes.input}
              placeholder='Enter your name'
              value={username}
              onChange={newPlayer}
              onKeyUp={enterName}
              maxLength='16'
            />
          </div>
          <img
            className={classes.icon}
            src={enter}
            onClick={onSubmit}
            alt='submit name'
          />
        </div>
      </>
    );
  } else {
    page = (
      <Game
        end={endGameHandler}
        username={username}
        score={score}
        word={word}
        userid={userId}
        guessesLeft={guesses_left}
        guessedLetters={guessedLetters}
        hintsLeft={hints_left}
      />
    );
  }

  return page;
};

export default RankGameLogin;
