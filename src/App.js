import Header from "./components/UI/Header";
import RankGameLogin from "./components/pages/RankGameLogin";
import classes from './App.module.css'
import Game from "./components/pages/game";
import Challenge from "./components/pages/Challenge";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <div className={classes.mainPage}>
      <Landing />
      {/* <Header /> */}
      {/* <Challenge /> */}
      {/* <RankGameLogin /> */}
      {/* <Game /> */}
    </div>
  );
}

export default App;
