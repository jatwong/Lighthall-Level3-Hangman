import Leaderboard from "../Leaderboard";
import classes from "./Landing.module.css";

const Landing = () => {
  
  const playGameHandler = () => {};
  const createGameHandler = () => {};

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
