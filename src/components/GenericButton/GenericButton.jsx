import './GenericButton.scss'

import React from 'react';

function GenericButton({text, icon}) {
    return (
        <div className='genericButtonContainer'>
            {icon}{text}
        </div>
    );
}

export default GenericButton;