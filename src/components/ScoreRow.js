// FUNCTION TO GENERATE FORMATTED SCORES
// max length of the whole string is 26
// dashCount = maxLength - nameLength

const ScoreRow = (props) => {



  return <p>{props.count}. {props.name} -------------------------- {props.score}</p>;
};

export default ScoreRow;
