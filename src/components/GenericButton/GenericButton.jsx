import './GenericButton.scss'

import React from 'react';

function GenericButton({text}) {
    return (
        <div className='genericButtonContainer'>
            {text}
        </div>
    );
}

export default GenericButton;