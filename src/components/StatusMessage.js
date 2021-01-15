import React from 'react'

const StatusMessage = ({ winner, current }) => {


    // that we will pass inside and this call back function must return boolean value and for every
    // element the call back returns true then the whole condition will be set to true AND if atleast 
    //one element returns false from this callback functoin then the whole condition will be set to false }

    const noMovesLeft = current.board.every(el => el !== null);

    return <h2>
        {
            winner && `Winner is ${winner}`
        }
        {
            !winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'} `
        }
        {
            !winner && noMovesLeft && "It's a tie"
        }

    </h2>;


};

export default StatusMessage;