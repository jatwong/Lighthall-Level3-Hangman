import { useNavigate } from 'react-router-dom';
import './gameover.css';

const GameOver = ({username, score}) => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/');
  };

  return (
    <div className='gameover-container'>
        <div className='gameover'>
            <div className='geor'>
                <h1>Game Over</h1>
            </div>
            <h2 className='username'>{username}</h2>
            <h2 className='final-score'>Final Score: {score}</h2>
            <button className='ok-btn' onClick={handleOkClick}>OK</button>
        </div>
    </div>
  );
};

export default GameOver;