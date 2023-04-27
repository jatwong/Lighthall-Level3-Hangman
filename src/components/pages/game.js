import './game.css'
import { useState } from 'react';

const Game = () => {
    const [score, setScore] = useState(0);
    const [hint, setHint] = useState('Get Hint');
    const [word, setWord] = useState('Example');
    const [wordarray, setWordarray] = useState(Array(word.length).fill('___ '));
    const letters1 = 'ABCDEFGHIJKLM';
    const letters2 = 'NOPQRSTUVWXYZ';

    const getHint = () => {
            setHint('Hint: The answer sefs sf sgsg rgs rg g is 42');
    }

    const handleletterclick = (letter) => {
        console.log(letter);
        let newWordArray = [...wordarray];
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === letter.toLowerCase()) {
                newWordArray[i] = letter + "   ";
            }
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
        </div>
    );
}

export default Game;