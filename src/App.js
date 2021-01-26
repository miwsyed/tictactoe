import './styles/root.scss';
import React, { useState } from 'react';
import History from './components/History';
import Landing from './components/Landing';
import Game from './components/Game';
import { Switch, Route, Redirect } from 'react-router-dom';



const initialState = {
  player1: '',
  player2: ''
}

const App = () => {
  const [players, setPlayers] = useState(initialState);

  return <Switch>

    <Route exact path="/">

      <Landing players={players} setPlayers={setPlayers} />

    </Route>


    <Route exact path="/game">

      <Game players={players} setPlayers={setPlayers} />

    </Route>



    <Route>ERROR 404 NOT FOUND</Route>


  </Switch>

};

export default App;
