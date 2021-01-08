import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import apiKeys from './apiKeys'; 
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import SectionWrap from '../SectionWrap/SectionWrap';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Contact.scss';
import ContactCard from './ContactCard/ContactCard';
import Submitted from './Submitted/Submitted';


export default () => {
    const [state, setState] = useState({
        name:'',
        number:'',
        email:'',
        comment:''
    });
    const [sent, setSent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const onChangeHandler = (e) => {
        const target = e.target;
        setState({
            ...state,
            [target.name]: target.value,
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const templateParams = {
            'from_name': state.name,
            'message': `name: ${state.name} mobile: ${state.number} email: ${state.email} message: ${state.comment}`
        };
        emailjs.send(apiKeys.service_id, apiKeys.template_id, templateParams, apiKeys.user_id)
        .then(() => setSent(true) )
        .then((error) => error);
        console.log(sent);
        setState((prevState) => ({
            name:'',
            number:'',
            email:'',
            comment:''
        }));
    }   
    const form = (
        <form onSubmit={onSubmitHandler} style={{display: `${submitted?'none':'block'}`}} className="contact-form">
                            <Input 
                                changed={onChangeHandler}  
                                type='text' 
                                inputName='Name' 
                                inputValue={state.name}
                                tab='1'/>
                            <Input 
                                changed={onChangeHandler}
                                type='number' 
                                inputName='Number'
                                inputValue={state.number}
                                tab='2' />
                            <Input 
                                changed={onChangeHandler}
                                type='email' 
                                inputName='Email'
                                inputValue={state.email}
                                tab='3' 
                                />
                            <Input 
                                changed={onChangeHandler}
                                ctg='textarea' 
                                inputName='comment'
                                inputValue={state.comment}
                                tab='4' />
                            <Button tab='5' type='submit' btnName='Send Mail'/>
                        </form>
    );
    return (
        <div className="contact">
            <SectionWrap title='Contact Me' >
                <div className="contact-wrapper">
                    <div className="left-column">
                        <h2 className="title">Get In Touch</h2>
                        {
                            submitted ? 
                            <Submitted sent={sent} />:
                            form
                        }
                        
                    </div>
                    <div className="right-column">
                        <ContactCard 
                        title='Phone' 
                        contact1='01758681702' 
                        contact2='01575047862'
                        icon={<FaMobileAlt />} />
                        <ContactCard 
                        title='Email' 
                        contact1='jifakir@outlook.com' 
                        contact2='jifakir@outlook.com'
                        icon={<AiOutlineMail />} />
                        <ContactCard 
                        title='Address' 
                        contact1='West Rajoir, Rayenda, Sarankhola, Bagerhat-9330'
                        icon={<MdLocationOn />} />
                    </div>
                </div>
            </SectionWrap>
        </div>
    )
}