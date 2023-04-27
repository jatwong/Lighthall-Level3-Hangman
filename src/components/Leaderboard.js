import classes from "./Leaderboard.module.css";
import ScoreRow from "./ScoreRow";

const DUMMY_SCORES = [
  { name: "Mary", score: 1000 },
  { name: "John", score: 1000 },
  { name: "Jo", score: 900 },
  { name: "A", score: 800 },
  { name: "Kat", score: 800 },
  // { name: "Larry", score: 700 },
  // { name: "Bob", score: 700 },
  // { name: "John", score: 600 },
  // { name: "Kat", score: 300 },
  { name: "", score: 0 },
];

const Leaderboard = () => {
  const topTen = (scoreList) => {
    while (scoreList.length < 10) {
      scoreList.push({ name: "", score: 0 });
    }
    return scoreList;
  };

  const getDashes = (player) => {
    if (player.name === "" && player.score === 0) {
      return "-".repeat(27);
    } else {
      const dashCount = 26 - player.name.length - String(player.score).length;
      const dashes = "-".repeat(dashCount);
      return dashes;
    }
  };

  let count = 1;

  return (
    <div className={classes.leaderboard}>
      <div className={classes.title}>
        <h2>Leaderboard</h2>
        <p>(Top 10)</p>
      </div>
      <div className={classes.scores}>
        {topTen(DUMMY_SCORES).map((player) => (
          <ScoreRow
            key={count}
            count={count++}
            name={player.name}
            dashes={getDashes(player)}
            score={player.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
