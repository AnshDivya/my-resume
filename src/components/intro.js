import React from 'react';
import Image from './Image';
import PersonelDetailsAnimator from './PersonalDetailsAnimator';
import profilePic from '../profilePic.jpg';
import '../myStyles/intro.css';
import Links from './links';
function Intro(props) {
    
    return (
        <div className = 'background'>
            <div className = 'intro-container' >
                <div className = 'intro' id = 'intro'>
                    <Image {...props} src = {profilePic} styleClass = 'profilePic'/>
                    <PersonelDetailsAnimator {...props}/>
                </div>
            <Links />
            </div>
        </div>
       
        
    );
}

export default Intro;