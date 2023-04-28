import { useNavigate } from 'react-router-dom';
import Game from './game';

const SharedGame = () => {
  const navigate = useNavigate();

  const endGameHandler = () => {
    navigate('/');
  };

  return (
    <>
    
      <Game end={endGameHandler} />
    </>
  );
};

export default SharedGame;
