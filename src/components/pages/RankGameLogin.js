import enter from "../UI/icons/arrow-right-circle 1.svg";
import classes from './RankGameLogin.module.css'
import { useNavigate } from 'react-router-dom';

const RankGameLogin = () => {

  const navigate = useNavigate();

  const handleonclick = () => {
    navigate('/game');
  }

  return (
    <div className={classes.page}>
      <div className={classes.inputDiv}>
        <p className={classes.label}>Enter your name</p>
        <input className={classes.input} placeholder="Enter your name" />
      </div>
         <img onClick={() => handleonclick()} className={classes.icon} src={enter} alt="submit name" />
    </div>
  );
};

export default RankGameLogin;
