import classes from "./Header.module.css";
const Header = (props) => {
  let content = '';
  if (props.page === 'game') {
    content = 'End Game';
  } else {
    content = 'Back';
  }
  
  return (
    <div className={classes.mobile}>
      <header className={classes.header}>
        <h3 className={classes.title}>HANGMAN</h3>
        {/* check page, render either END GAME or BACK */}
        <h3 className={classes.exit} onClick={props.exit}>
          {content}
        </h3>
    </header>
    </div>
  );
};

export default Header;
