import React from 'react';
import {MdDoneAll} from 'react-icons/md';
import './Submitted.scss';


const Submitted = ({sent}) => {
    const spinner = (
            <div className="waiting-wrapper">
                <div className="loader">

                </div>
                <div className="waiting">Your mail is sending....</div>
            </div>
    );
    const success = (
            <div className="success">
                <MdDoneAll className='success-icon' />
                <p>Your mail has been sent successfully.</p>
            </div>
    );
    return (
        <div className="submitted">
            {
                sent ? success : spinner
            }
        </div>
    )
}

export default Submitted;