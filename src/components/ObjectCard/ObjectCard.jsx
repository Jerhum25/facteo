import './ObjectCard.scss'

import React from 'react';

function ObjectCard({nom, adresse, numeroObjet}) {
    return (
        <div className='ObjectCardContainer'>
            <p className="nom">{nom}</p>
            <p className="adresse">{adresse}</p>
            <p className="numeroObjet">{numeroObjet}</p>
        </div>
    );
}

export default ObjectCard;