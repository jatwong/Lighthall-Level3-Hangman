import Header from "./components/UI/Header";
import RankGame from "./components/pages/RankGameLogin";
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.mainPage}>
      <Header />
      <RankGame />
    </div>
  );
}

export default App;
