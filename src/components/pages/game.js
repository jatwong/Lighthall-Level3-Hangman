import Header from '../UI/Header';
import './game.css';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import GameOver from './gameover';
import hang1 from '../UI/img/Hang-1.png';
import hang2 from '../UI/img/Hang-2.png';
import hang3 from '../UI/img/Hang-3.png';
import hang4 from '../UI/img/Hang-4.png';
import hang5 from '../UI/img/Hang-5.png';
import hang6 from '../UI/img/Hang-6.png';
import hang7 from '../UI/img/Hang-7.png';
import hang8 from '../UI/img/Hang-8.png';
import hang9 from '../UI/img/Hang-final.png';

const Game = () => {
    const [score, setScore] = useState(0);
    const [hint, setHint] = useState('Get Hint');
    const [word, setWord] = useState('Example');
    const [wordarray, setWordarray] = useState(Array(word.length).fill('___ '));
    const [wrong, setWrong] = useState(0);
    const [right, setRight] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [username, setUsername] = useState('Kartik');
    const letters1 = 'ABCDEFGHIJKLM';
    const letters2 = 'NOPQRSTUVWXYZ';

    const images = [
        hang1,
        hang2,
        hang3,
        hang4,
        hang5,
        hang6,
        hang7,
        hang8,
        hang9
    ];

    const getHint = () => {
            setHint('Hint: The answer sefs sf sgsg rgs rg g is 42');
    }

    const handleletterclick = (letter) => {
        console.log(letter);
        let newWordArray = [...wordarray];
        let found = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === letter.toLowerCase()) {
                newWordArray[i] = letter + "   ";
                setScore(score + 100);
                found = true;
            }
        }
        if (!found) {
            setWrong(wrong + 1);
            if (wrong === 7) {
                setGameOver(true);
            }
        }
        setWordarray(newWordArray);
    }
    setWordarray(newWordArray);
    // fetch('/api/letter', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ letter: letter })
    // })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         // handle response data here
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
  };

    const getimage = () => {
        return images[wrong];
    }

    return (
        <div className='game-container'>
            <div className='user-stats'>
                <div>
                    <h1 className="name">{username}</h1>
                    <h1 className="score">Score: {score}</h1>
                </div>
                <div>
                    <button className='hint-btn' onClick={() => getHint()}>{hint}</button>
                </div>
            </div>
            <div className='word-container'>
                <div>
                {letters1.split('').map((letter, index) => (
                    <button onClick={() => handleletterclick(letter)} className='letter-btn1' key={index}>{letter}</button>
                ))}
                </div>
                <div>
                {letters2.split('').map((letter, index) => (
                    <button onClick={() => handleletterclick(letter)} className='letter-btn2' key={index}>{letter}</button>
                ))}
                </div>
            </div>
            <div className='word-arr'>
                <h1 className='word'>
                    {wordarray.map((letter, index) => (
                            <span key={index}>{letter}</span>
                    ))}
                </h1>
            </div>
            <div className='img-container'>
                <img className='img' src={getimage()} alt='hangman' />
            </div>
            {gameOver && <GameOver username = {username} score={score} />}
        </div>
      </div>
    </>
  );
};

export default Game;
