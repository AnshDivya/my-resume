import React from 'react';
import '../myStyles/contact.css';
import ContactForm from './contactform';
import PersonalDetailsAnimatorOnScroll from './PersonalDetailsAnimatorOnScroll';
import { Waypoint } from 'react-waypoint';

function Contact(props) {

    return (
        <Waypoint
            onEnter = {({ previousPosition, currentPosition, event }) => {
                console.log('IN '+props.heading);
                
                if((previousPosition === "below" || previousPosition === 'above') && currentPosition === "inside") {
                    console.log('CHANGING VIEW TO '+props.heading);
                    
                    props.changeView(props.heading)

                }
        }}
        >
            <div className = 'contact'  id = 'CONTACT' ref = {props.myRef}>
                <div className = 'contact-heading'>
                    <h1> CONTACT ME</h1>
                </div>
                <div className = 'contact-container'>
                    <ContactForm {...props}/>
                    <PersonalDetailsAnimatorOnScroll {...props} />
                </div>
            </div>

        </Waypoint>

        )
}

export default Contact;