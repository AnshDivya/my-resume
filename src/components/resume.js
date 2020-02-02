import React from 'react';
import Header from './header';
import Intro from './intro'
import Background from './background';
import TextDescription from './textDescription';
import Experience from './experience';
function Resume() {
    return (
        <div>
            <Header />
            <Background />
            <Intro />
            <TextDescription />
            <Experience />
            <Experience />
            <Experience />
        </div>
    );
}

export default Resume;