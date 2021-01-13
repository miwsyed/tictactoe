import React, { useState } from 'react';
import Square from './Square';

const Board = () => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [isXNext, setIsXNext] = useState(false);

    const handleSquareClick = (position) => {

        if (board[position]) {
            return;
        }

        setBoard((prev) => {

            return prev.map((square, pos) => {
                if (pos === position) {
                    return isXNext ? 'X' : 'O';
                }

                return square;
            });

        });

        setIsXNext(prev => !prev);

    };

    const rederSquare = (position) => {
        return (
            <Square
                value={board[position]} onClick={() => handleSquareClick(position)}

            />
        );

    };

    return (
        <div className="board">
            <div className="board-row">
                {rederSquare(0)}
                {rederSquare(1)}
                {rederSquare(2)}



            </div>
            <div className="board-row">
                {rederSquare(3)}
                {rederSquare(4)}
                {rederSquare(5)}

            </div>
            <div className="board-row">
                {rederSquare(6)}
                {rederSquare(7)}
                {rederSquare(8)}
            </div>
        </div>
    );
};

export default Board;
