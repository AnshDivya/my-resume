import React from 'react';
import Image from './Image';
import PersonelDetails from './PersonalDetails';
import profilePic from '../profilePic.jpg';
import '../myStyles/intro.css';
import Links from './links';
function Intro() {
    return (
        <div className = 'intro-container'>
            <div className = 'intro'>
                <Image src = {profilePic} styleClass = 'profilePic'/>
                <PersonelDetails />
            </div>
            <Links />
        </div>
        
    );
}

export default Intro;