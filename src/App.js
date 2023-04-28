import Header from "./components/UI/Header";
import RankGameLogin from "./components/pages/RankGameLogin";
import classes from "./App.module.css";
import Game from "./components/pages/game";
import Challenge from "./components/pages/Challenge";
import Landing from "./components/pages/Landing";
import GameOver from "./components/pages/gameover";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

function App() {
  return (
    <div className={classes.mainPage}>
      <Router>
         <Header />
         <Routes>
          <Route path="/" element={<RankGameLogin />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
