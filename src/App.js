import Header from "./components/UI/Header";
import RankGame from "./components/pages/RankGameLogin";
import classes from './App.module.css'
import Game from "./components/pages/game";
import Challenge from "./components/pages/Challenge";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <div className={classes.mainPage}>
      {/* <Landing /> */}
      {/* <Header /> */}
      {/* <Challenge /> */}
      {/* <RankGame /> */}
      <Game />
    </div>
  );
}

export default App;
