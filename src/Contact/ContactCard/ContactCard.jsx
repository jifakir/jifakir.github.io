import React, {useEffect, useState} from 'react';

import './ContactCard.scss';



export default ({title, icon, contact1, contact2}) => {

    const [copy, setCopy] = useState("Copy to Clipboard!");
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopy("Copied!");
    }
    useEffect(()=> {
        if(copy !== "Copied!"){
            return
        }
        const setStutus = setTimeout(()=>setCopy("Copy to Clipboard!"), 1000);
        return ()=> clearTimeout(setStutus);
    },[copy]);

    return (
        <div className="contact-card">
            <div className="card-wrapper">
                <div className="icon-wrapper">
                    {icon}
                </div>
                <div className="contact-details">
                    <h1 className="title">{title}</h1>
                    <h4 onClick={()=>copyToClipboard(contact1)} className="details">{contact1} <span className="tooltips">{copy}</span> </h4>
                    <h4 onClick={()=>copyToClipboard(contact2)} className="details">{contact2} <span className="tooltips">{copy}</span> </h4>
                </div>
            </div>
        </div>
    )
}