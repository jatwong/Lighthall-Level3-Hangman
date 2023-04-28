import { useNavigate } from 'react-router-dom';

import Leaderboard from '../Leaderboard';

import classes from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  const playGameHandler = () => {
    navigate('/play-game');
  };
  const createGameHandler = () => {
    navigate('/create-game');
  };

  return (
    <div className={classes.page}>
      <Leaderboard />
      <div>
        <h1 className={classes.logo}>HANGMAN</h1>
        <div className={classes.options}>
          <button onClick={playGameHandler}>Play Ranked</button>
          <button onClick={createGameHandler}>Challenge a friend</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
