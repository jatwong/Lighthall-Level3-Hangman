import Header from '../UI/Header';
import GameOver from './gameover';
import Cookies from 'js-cookie';

import './game.css';

import { useState } from 'react';
import hang0 from '../UI/img/Hang-0.png';
import hang1 from '../UI/img/Hang-1.png';
import hang2 from '../UI/img/Hang-2.png';
import hang3 from '../UI/img/Hang-3.png';
import hang4 from '../UI/img/Hang-4.png';
import hang5 from '../UI/img/Hang-5.png';
import hang6 from '../UI/img/Hang-6.png';
import hang7 from '../UI/img/Hang-7.png';
import hangFinal from '../UI/img/Hang-final.png';

const Game = (props) => {
  const [wrong, setWrong] = useState(props.guessesLeft);

  const [isWinner, setIsWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const letters1 = 'abcdefghijklm';
  const letters2 = 'nopqrstuvwxyz';

  const images = [
    hangFinal,
    hang7,
    hang6,
    hang5,
    hang4,
    hang3,
    hang2,
    hang1,
    hang0,
  ];

  const logout = () => {
    Cookies.remove('userid');
    Cookies.remove('username');
  };

  // const getHint = (clue) => {
  //   fetch(
  //     `https://hangmanserver.jayraval20.repl.co/hint/${props.userid}/${clue}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (clue === 'def') {
  //         setDef(data.definition);
  //       } else if (clue === 'pop') {
  //         // set word
  //       }
  //     });
  // };

  const handleletterclick = (letter) => {
    fetch(
      `https://hangmanserver.jayraval20.repl.co/make-guess/${props.userid}/${letter}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        props.setGuessedLetters(data.letters_guessed);

        if (data.flag === 'wrong' && data.guesses_left > 0) {
          setWrong(wrong - 1);
        } else if (data.guesses_left === 0) {
          setWrong(wrong - 1);
          setTimeout(() => {
            setGameOver(true);
            props.setScore(data.score);
          }, 1000);
          logout();
        }

        if (data.won && data.score !== 1000) {
          setIsWinner(true);
          setGameOver(true);
          props.setScore(data.score);
        }

        if (data.score === 1000) {
          setGameOver(true)
          logout();
        }

        props.setGuessesLeft(data.guesses_left);

        props.setWord(data.word);

        // set hints_left -- for displaying to user
      });
  };

  const nextGameHandler = () => {
    fetch(`https://hangmanserver.jayraval20.repl.co/word/${props.userid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonbody) => {
        props.setScore(jsonbody.score);
        props.setWord(jsonbody.word);
        props.setGuessesLeft(jsonbody.guesses_left);
        props.setGuessedLetters("")
        setWrong(8)
      });

    setGameOver(false);
  };

  const getimage = () => {
    return images[wrong];
  };

  return (
    <>
      <Header page='game' end={props.end} />
      <div className='page'>
        <div className='user-stats'>
          <div>
            <h1 className='name'>{props.username}</h1>
            <h1 className='score'>Score: {props.score}</h1>
          </div>
          {/* <div className='hint-grp'>
            <button className='def-btn' onClick={() => getHint('def')}>
              Get definition
            </button>
            <button className='hint-btn' onClick={() => getHint('pop')}>
              Get hint
            </button>
          </div> */}
        </div>
        <div className='game-container'>
          <div className='word-container'>
            <div>
              {letters1.split('').map((letter, index) => (
                <button
                  onClick={() => handleletterclick(letter)}
                  className='letter-btn1'
                  key={index}
                  disabled={props.guessedLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div>
              {letters2.split('').map((letter, index) => (
                <button
                  onClick={() => handleletterclick(letter)}
                  className='letter-btn2'
                  key={index}
                  disabled={props.guessedLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
          <div className='word-arr'>{props.word}</div>
          <div className='img-container'>
            <img className='img' src={getimage()} alt='hangman' />
          </div>
          {gameOver && (
            <GameOver
              username={props.username}
              score={props.score}
              win={isWinner}
              next={nextGameHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
