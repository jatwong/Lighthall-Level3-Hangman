import enter from "../UI/icons/arrow-right-circle 1.svg";
import classes from './RankGameLogin.module.css'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import enter from '../UI/icons/arrow-right-circle 1.svg';
import classes from './RankGameLogin.module.css';
import { useNavigate } from 'react-router-dom';
import Game from './game';
import Header from '../UI/Header';


const RankGameLogin = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const newPlayer = (e) => {
    setUsername(e.target.value);
  };

  const enterName = (e) => {
    if (e.keycode === 13 || e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    // send name to BE
    // set state? & route to game
    // set cookie with unique ID from BE
    setLoggedIn(true);
    console.log('submitted...');
  };

  const goBackHandler = () => {
    navigate('/');
  };

  const endGameHandler = () => {
    // submit final score to BE
    console.log('ending game...')
  };

  let page;
  if (!loggedIn) {
    page = (
      <>
        <Header exit={goBackHandler} />
        <div className={classes.page}>
          <div className={classes.inputDiv}>
            <p className={classes.label}>Enter your name</p>
            <input
              className={classes.input}
              placeholder='Enter your name'
              value={username}
              onChange={newPlayer}
              onKeyUp={enterName}
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
    page = <Game end={endGameHandler}/>;
  }

  return page;
};

export default RankGameLogin;
