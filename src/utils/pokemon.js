import React from 'react';
import {PropTypes} from 'prop-types';

function Pokemon() {
    const { name, imageURL } = this.props;

    const pokemon = (
        <div>
            <h1>{name}</h1>
            <img src={imageURL} alt=""></img>
        </div>
    )
    return (
        <div
            className="mx-auto mt-4 text-center p-5"
        >
            {pokemon}
        </div>
    )
}

Pokemon.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string
}

export default Pokemon;