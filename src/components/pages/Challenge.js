import classes from "./Challenge.module.css";
import enter from "../UI/icons/arrow-right-circle 1.svg";

const Challenge = () => {
  let game = true;
  let content;

  if (game) {
    content = (
      <>
        <p className={classes.instructions}>
          Pick a word for your friend to guess
        </p>
        <form className={classes.form}>
          <div>
            <label>Enter a word</label>
            <input placeholder="Enter a word" />
          </div>
          <div>
            <label>Enter the word's definition</label>
            <textarea placeholder="Enter a definition of the word" />
          </div>
        </form>
        <button className={classes.submit}>Create game</button>
      </>
    );
  } else {
    content = (
      <div className={classes.share}>
        <p>Your game is ready! Share this link with friends.</p>
        <p className={classes.link}>https://your-game-here.domain.com/?session=abc123/</p>
      </div>
    );
  }

  return (
    <>
      <div className={classes.page}>
        <p className={classes.title}>Challenge a friend</p>
        {content}
      </div>
    </>
  );
};

export default Challenge;
