import React from 'react';
import Header from './header';
import Intro from './intro'
import Background from './background';
import TextDescription from './textDescription';
import ExpEdu from './expEdu';
import Skills from './skill-container';
function Resume() {
    return (
        <div>
            <Header />
            <Background />
            <Intro />
            <TextDescription />
            <ExpEdu heading = "EXPERIENCE"/>
            <ExpEdu heading = "EDUCATION"/>
            <Skills />
        </div>
    );
}

export default Resume;