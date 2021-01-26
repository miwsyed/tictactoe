import React from 'react';

const StatusMessage = ({ winner, current, players }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  const { player1, player2 } = players;


  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner === 'X' ? `${player1}` : `${player2}`}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? `${player1}` : `${player2}`}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">{player1}</span> and{' '}
          <span className="text-orange">{player2}</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
