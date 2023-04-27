import './game.css'
import { useState } from 'react';

const Game = () => {
    const [score, setScore] = useState(0);
    const [hint, setHint] = useState('Get Hint');
    const letters1 = 'ABCDEFGHIJKLM'
    const letters2 = 'NOPQRSTUVWXYZ'

    const getHint = () => {
            setHint('Hint: The answer sefs sf sgsg rgs rg g is 42');
    }

    return (
        <div className='game-container'>
            <div className='user-stats'>
                <div>
                    <h1 className="name">Kartik</h1>
                    <h1 className="score">Score: {score}</h1>
                </div>
                <div>
                    <button className='hint-btn' onClick={() => getHint()}>{hint}</button>
                </div>
            </div>
            <div className='word-container'>
                {/* Display the letters for hangman game */}
                <div>
                {letters1.split('').map((letter, index) => (
                    <button className='letter-btn1' key={index}>{letter}</button>
                ))}
                </div>
                <div>
                {letters2.split('').map((letter, index) => (
                    <button className='letter-btn2' key={index}>{letter}</button>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Game;