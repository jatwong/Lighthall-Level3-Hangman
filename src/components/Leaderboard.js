import { useEffect, useState } from 'react';
import classes from './Leaderboard.module.css';
import ScoreRow from './ScoreRow';

const Leaderboard = () => {
  const [scoreboard, setScoreboard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://hangmanserver.jayraval20.repl.co/leaderboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setScoreboard(data);
        setIsLoading(false);
      });
  }, []);

  const topTen = (scoreList) => {
    while (scoreList.length < 10) {
      scoreList.push({ name: '', score: 0 });
    }
    return scoreList;
  };

  const getDashes = (player) => {
    if (player.name === '' && player.score === 0) {
      return '-'.repeat(27);
    } else {
      const dashCount =
        26 - player.username.length - String(player.score).length;
      const dashes = '-'.repeat(dashCount);
      return dashes;
    }
  };

  let count = 1;
  let board;

  if (isLoading) {
    board = <p>Getting top scores...</p>;
  } else {
    board = (
      <>
        {topTen(scoreboard).map((player) => (
          <ScoreRow
            key={player._id}
            count={count++}
            name={player.username}
            dashes={getDashes(player)}
            score={player.score}
          />
        ))}
      </>
    );
  }

  return (
    <div className={classes.leaderboard}>
      <div className={classes.title}>
        <h2>Leaderboard</h2>
        <p>(Top 10)</p>
        
      </div>
      <div className={classes.scores}>
        {board}
      </div>
    </div>
  );
};

export default Leaderboard;
