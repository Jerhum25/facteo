import { FaArrowAltCircleLeft } from 'react-icons/fa';
import ObjectCards from '../../components/ObjectCards/ObjectCards';
import './ObjectsList.scss'

import React from 'react';
import { Link } from 'react-router-dom';

function ObjectsList(props) {
    return (
        <div className='ObjectsListContainer'>
            <ObjectCards/>
            <Link to="/" className="backBtn"><FaArrowAltCircleLeft/></Link>
        </div>
    );
}

export default ObjectsList;