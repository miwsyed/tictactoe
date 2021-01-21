import './styles/root.scss';
import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = (props) => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return <Switch>


    <Route exact path="/">

      <Landing />


    </Route>


    <Route exact path="/game">
      <div className="app">
        <h1>
          <span className="text-green">XARAB</span>  <span className="text-orange">ZERO</span>
        </h1>

        <StatusMessage winner={winner} current={current} />
        <Board
          board={current.board}
          handleSquareClick={handleSquareClick}
          winningSquares={winningSquares}
        />
        <button
          type="button"
          onClick={onNewGame}
          className={`btn-reset ${winner ? 'active' : ''}`}
        >
          Start new game
    </button>
        <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
        <div className="bg-balls" />
      </div>
    </Route>

    <Route>ERROR 404 NOT FOUND</Route>

  </Switch >
};

export default App;
