import React from 'react';
import '../myStyles/contact.css';
import ContactForm from './contactform';
import PersonalDetailsAnimatorOnScroll from './PersonalDetailsAnimatorOnScroll';

function Contact(props) {

    return (
        <div className = 'contact'  id = 'CONTACT' ref = {props.myRef}>
            <div className = 'contact-heading'>
                <h1> CONTACT ME</h1>
            </div>
            <div className = 'contact-container'>
                <ContactForm />
                <PersonalDetailsAnimatorOnScroll />
            </div>
        </div>
        )
}

export default Contact;