import { FaSquareArrowUpRight } from 'react-icons/fa6';
import './ObjectCard.scss'

import React from 'react';

function ObjectCard({nom, adresse, numeroObjet}) {
    return (
        <div className='ObjectCardContainer'>
            <p className="adresse">{adresse}<FaSquareArrowUpRight /></p>
            <div>
                <p className="nom">{nom}</p>
                <p className="numeroObjet">{numeroObjet}</p>
            </div>
        </div>
    );
}

export default ObjectCard;