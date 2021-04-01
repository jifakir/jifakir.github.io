import React from 'react';
import {MdDoneAll} from 'react-icons/md';
import Loader from '../../UI/Loader/Loader';
import './Submitted.scss';


const Submitted = ({sent}) => {
    
    const success = (
            <div className="success">
                <MdDoneAll className='success-icon' />
                <p>Your mail has been sent successfully.</p>
            </div>
    );
    return (
        <div className="submitted">
            {
                sent ? success : <Loader title="Your mail sending" />
            }
        </div>
    )
}

export default Submitted;