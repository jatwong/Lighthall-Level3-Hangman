// FUNCTION TO GENERATE FORMATTED SCORES
// max length of the whole string is 26
// dashCount = maxLength - nameLength

const ScoreRow = (props) => {
  let row = "";
  if (props.name === "" && props.score === 0) {
    row = (
      <p>
        {props.count}. {props.dashes}
      </p>
    );
  } else {
    row = (
      <p>
        {props.count}. {props.name} {props.dashes} {props.score}
      </p>
    );
  }
  return row;
};

export default ScoreRow;
