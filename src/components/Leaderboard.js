import classes from "./Leaderboard.module.css";

const Leaderboard = () => {
  let count = 1;

  
  return (
    <div className={classes.leaderboard}>
      <div className={classes.title}>
        <h2>Leaderboard</h2>
        <p>(Top 10)</p>
      </div>
      <div className={classes.scores}>
        {/* map scores here; default is 26 underscores */}
        {/* topTen().map((player) => 
        <ScoreRow 
            key = player.id
            count = count++
            score = player.score
            name = player.name
        />) */}
        <p>1. Mary ---------------- 1000</p>
        <p>2. --------------------------</p>
        <p>3. --------------------------</p>
        <p>4. --------------------------</p>
        <p>5. --------------------------</p>
        <p>6. --------------------------</p>
        <p>7. --------------------------</p>
        <p>8. --------------------------</p>
        <p>9. --------------------------</p>
        <p>10. --------------------------</p>
      </div>
    </div>
  );
};

export default Leaderboard;
