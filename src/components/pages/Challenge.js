import classes from "./Challenge.module.css";
import enter from "../UI/icons/arrow-right-circle 1.svg";

const Challenge = () => {
  return (
    <>
      <div className={classes.page}>
        <div className={classes.inputDiv}>
          <p className={classes.title}>Challenge a friend</p>
          <p className={classes.instructions}>
            Pick a word for your friend to guess
          </p>
          {/* if entered, show URL */}
          <input className={classes.input} placeholder="Enter a word" />
        </div>
        {/* if entered, no icon */}
        <img className={classes.icon} src={enter} alt="submit word" />
      </div>
    </>
  );
};

export default Challenge;
