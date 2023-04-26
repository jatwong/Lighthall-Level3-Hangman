import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
        <h3 className={classes.title}>HANGMAN</h3>
        <h3 className={classes.exit}>End Game</h3>
    </header>
  );
};

export default Header;
