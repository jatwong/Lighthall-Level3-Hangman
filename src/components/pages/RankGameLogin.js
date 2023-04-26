import enter from "../UI/icons/arrow-right-circle 1.svg";
import classes from './RankGameLogin.module.css'

const RankGameLogin = () => {
  return (
    <div className={classes.page}>
      <div className={classes.inputDiv}>
        <p className={classes.label}>Enter your name</p>
        <input className={classes.input} placeholder="Enter your name" />
      </div>
      <img className={classes.icon} src={enter} alt="submit name" />
    </div>
  );
};

export default RankGameLogin;
