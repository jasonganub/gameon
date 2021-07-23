import React from 'react';
import {PropTypes} from 'prop-types';

function Game() {
    const { name, imageURL } = this.props;

    const gameDetails = (
        <div>
            <h1>catan</h1>
            <img src="" alt=""></img>
        </div>
    )
    return (
        <div
            className="mx-auto mt-4 text-center p-5"
        >
            {gameDetails}
        </div>
    )
}

Game.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string
}

export default Game;