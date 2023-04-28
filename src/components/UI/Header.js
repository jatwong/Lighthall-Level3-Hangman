import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleexit = () => {
    navigate('/');
  }
  
  return (
    <div className={classes.mobile}>
      <header className={classes.header}>
        <h3 className={classes.title}>HANGMAN</h3>
        {/* check page, render either END GAME or BACK */}
        <h3 className={classes.exit}>End Game</h3>
      </header>
    </div>
  );
};

export default Header;
