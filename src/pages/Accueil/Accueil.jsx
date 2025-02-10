import ObjectCards from '../../components/ObjectCards/ObjectCards';
import Recap from '../Recap/Recap';
import './Accueil.scss'
import React from 'react';
function Accueil(props) {
    return (
        <div className='accueilContainer'>
            {/* <ObjectCards/> */}
            <Recap/>
        </div>
    );
}

export default Accueil;