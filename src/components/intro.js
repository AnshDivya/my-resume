import React from 'react';
import Image from './Image';
import PersonelDetailsAnimator from './PersonalDetailsAnimator';
import profilePic from '../profilePic.jpg';
import '../myStyles/intro.css';
import Links from './links';
function Intro() {
    return (
        <div className = 'intro-container'>
            <div className = 'intro'>
                <Image src = {profilePic} styleClass = 'profilePic'/>
                <PersonelDetailsAnimator />
            </div>
            <Links />
        </div>
        
    );
}

export default Intro;