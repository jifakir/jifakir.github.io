import React from 'react';

import './Input.scss';



export default ({inputName, ctg, type, changed, inputValue, tab}) => {

    const input = (<input onChange={changed} value={inputValue} tabIndex={tab} name={inputName.toLowerCase()} type={type} required />);
    
    const textarea = (<textarea onChange={changed} value={inputValue} tabIndex={tab} name={inputName} id="text-area" cols="1" rows="5"></textarea>)

    return(
        <div className="input-field">
                {ctg==='textarea'?textarea:input}
                <label className={inputValue?'input-label-shrink':'label'} htmlFor={inputName}>{`*${inputName}`}</label>
        </div>
    )
}