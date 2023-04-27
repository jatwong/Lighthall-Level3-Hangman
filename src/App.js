import Header from "./components/UI/Header";
import RankGame from "./components/pages/RankGameLogin";
import classes from './App.module.css'
import Game from "./components/pages/game";

function App() {
  return (
    <div className={classes.mainPage}>
      <Header />
      {/* <RankGame /> */}
      <Game />
    </div>
  );
}

export default App;
