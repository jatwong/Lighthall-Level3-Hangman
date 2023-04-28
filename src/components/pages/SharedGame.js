import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Game from './game';

const SharedGame = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [word, setWord] = useState('');
  const [guesses_left, setGuessesLeft] = useState(8);
  const [guessedLetters, setGuessedLetters] = useState('');

  const endGameHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    setLoading(true);

    fetch(`https://hangmanserver.jayraval20.repl.co/word/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonbody) => {
        setScore(jsonbody.score);
        setWord(jsonbody.word);
        setGuessesLeft(jsonbody.guesses_left);
        setGuessedLetters(jsonbody.letters_guessed);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <Game
        end={endGameHandler}
        username={''}
        score={score}
        word={word}
        setWord={setWord}
        userid={id}
        guessesLeft={guesses_left || 8}
        setGuessesLeft={setGuessesLeft}
        guessedLetters={guessedLetters || ''}
        setGuessedLetters={setGuessedLetters}
        setScore={setScore}
        isShared={true}
      />
    </>
  );
};

export default SharedGame;
