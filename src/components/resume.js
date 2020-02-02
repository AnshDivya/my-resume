import React from 'react';
import Header from './header';
import Intro from './intro'
import Background from './background';
import TextDescription from './textDescription';
import ExpEdu from './expEdu';
function Resume() {
    return (
        <div>
            <Header />
            <Background />
            <Intro />
            <TextDescription />
            <ExpEdu heading = "EXPERIENCE"/>
            <ExpEdu heading = "EDUCATION"/>
        </div>
    );
}

export default Resume;