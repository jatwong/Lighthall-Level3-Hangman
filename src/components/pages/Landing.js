import Leaderboard from "../Leaderboard";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.page}>
      <Leaderboard />
      <div>
        <h1 className={classes.logo}>HANGMAN</h1>
        <div className={classes.options}>
          <button>Play Ranked</button>
          <button>Challenge a friend</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
