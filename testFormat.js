function generateScoreboard(scores) {
    // const maxLength = Math.max(...scores.map(({ name }) => name.length));
    const lines = scores.map(({ name, score }) => {
      const dashCount = 26 - name.length - String(score).length;
      const dashes = '-'.repeat(dashCount + 1);
      return `${name} ${dashes} ${score}`;
    });
    return lines.join('\n');
  }


  const scores = [
    { name: 'MARY', score: 1000 },
    { name: 'JO', score: 900 },
    // Add more scores here
  ];
  
  const scoreboard = generateScoreboard(scores);
  console.log(scoreboard);