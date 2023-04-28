import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import './gameover.css';
import { useState } from 'react';

const GameOver = (props) => {
  const [isShared, setIsShared] = useState(false);

  const navigate = useNavigate();

  const handleOkClick = () => {
    Cookies.remove('userid');
    Cookies.remove('username');
    navigate('/');
  };

  const handleNext = () => {
    props.next();
  };

  let win;
  if (props.win && props.isShared) {
    win = (
      <>
        <div className='win'>
          <h1>Winner!</h1>
        </div>
        <div className='content'>
          {<h2>{props.username}</h2>}
          <h2>Final Score: {props.score}</h2>
        </div>
        <button className='ok-btn' onClick={handleOkClick}>
          OK
        </button>
      </>
    );
  } else if (props.win) {
    win = (
      <>
        <div className='win'>
          <h1>Winner!</h1>
        </div>
        <div className='content'>
          {<h2>{props.username}</h2>}
          <h2>Final Score: {props.score}</h2>
        </div>
        <button className='ok-btn' onClick={handleNext}>
          Next Game
        </button>
      </>
    );
  } else {
    win = (
      <>
        <div className='geor'>
          <h1>Game Over</h1>
        </div>
        <div className='content'>
          {<h2>{props.username}</h2>}
          <h2>Final Score: {props.score}</h2>
        </div>
        <button className='ok-btn' onClick={handleOkClick}>
          OK
        </button>
      </>
    );
  }

  return (
    <div className='gameover-container'>
      <div className='gameover'>{win}</div>
    </div>
  );
};

export default GameOver;
