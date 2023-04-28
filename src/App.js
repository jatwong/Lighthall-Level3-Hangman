import Header from "./components/UI/Header";
import RankGameLogin from "./components/pages/RankGameLogin";
import classes from "./App.module.css";
import Game from "./components/pages/game";
import Challenge from "./components/pages/Challenge";
import Landing from "./components/pages/Landing";
import GameOver from "./components/pages/gameover";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import RankGameLogin from './components/pages/RankGameLogin';
import classes from './App.module.css';
import Challenge from './components/pages/Challenge';
import Landing from './components/pages/Landing';
import { Route, Routes } from 'react-router-dom';
import SharedGame from './components/pages/SharedGame';

function App() {
//   <Router>
//   <Header />
//   <Routes>
//    <Route path="/" element={<RankGameLogin />} />
//    <Route path="/game" element={<Game />} />
//  </Routes>
// </Router>
  return (
    <div className={classes.mainPage}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/play-game' element={<RankGameLogin />} />
        <Route path='/shared-game/*' element={<SharedGame />} />
        <Route path='/create-game' element={<Challenge />} />
      </Routes>
    </div>
  );
}

export default App;
