import React from 'react';

const LastOne = ({colors, randomColorIndex, increment}) => {
    return (
        <div className="LastOne">
        <button onClick= {increment} >
            <i className="fa-solid fa-arrows-spin" style = {{ color: colors [randomColorIndex]}} >
            </i>    
        </button>
    </div>
    );
};

export default LastOne;