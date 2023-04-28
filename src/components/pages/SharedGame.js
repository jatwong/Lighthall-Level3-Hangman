import Game from './game';

const SharedGame = () => {
  const endGameHandler = () => {
    // submit final score to BE
    console.log('ending game...');
  };
  
  return (
    <>
      <Game end={endGameHandler} />
    </>
  );
};

export default SharedGame;
