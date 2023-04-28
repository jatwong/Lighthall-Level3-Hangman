import { Route, Routes } from 'react-router-dom';

import Landing from "./components/pages/Landing";
import Challenge from "./components/pages/Challenge";
import RankGameLogin from './components/pages/RankGameLogin';
import SharedGame from './components/pages/SharedGame';

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.mainPage}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/play-game' element={<RankGameLogin />} />
        <Route path='/shared-game/:id' element={<SharedGame />} />
        <Route path='/create-game' element={<Challenge />} />
      </Routes>
    </div>
  );
}

export default App;
