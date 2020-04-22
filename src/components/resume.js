import React, {useEffect, useRef, useState} from 'react';
import Header from './header';
import Intro from './intro'
import Background from './background';
import TextDescription from './textDescription';
import TimelineContainer from './timeline-container';
import Skills from './skill-container';
import Contact from './contact';
function Resume() {

    const [index, setIndex] = useState(0);
    const displayStates = ['', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'CONTACT'];
    
    const handleScroll = () => {

        let newIndex = index;
        // console.log(window.pageYOffset, skillRef.current.getBoundingClientRect().top, 
        // eduRef.current.getBoundingClientRect().top
        // ,expRef.current.getBoundingClientRect().top);

        const skillTop = skillRef.current.getBoundingClientRect().top - 400;
        const skillBottom = skillRef.current.getBoundingClientRect().bottom - 400;
        const eduTop = eduRef.current.getBoundingClientRect().top - 400;
        const eduBottom = eduRef.current.getBoundingClientRect().bottom - 400;
        const expTop = expRef.current.getBoundingClientRect().top - 400;
        const expBottom = expRef.current.getBoundingClientRect().bottom - 400;
        const contactTop = contactRef.current.getBoundingClientRect().top - 400;
        const contactBottom = contactRef.current.getBoundingClientRect().bottom;

        console.log(contactTop, contactBottom);
        if(contactTop <= 0 && contactBottom >= 0)
            newIndex = 4;
        else if(skillTop <= 0 && skillBottom >= 0)
            newIndex = 3;
        else if(eduTop <= 0 && eduBottom >= 0)
            newIndex = 2;
        else  if(expTop <= 0 && expBottom >= 0)
            newIndex = 1;
        else
            newIndex = 0;
        setIndex(newIndex); 
        
        
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        console.log("USE EFFECT");
        
    })

    const expRef = useRef(null);
    const eduRef = useRef(null);
    const skillRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <div>
            <Header selected = {displayStates[index]}/>
            <Background />
            <Intro />
            <TextDescription />
            <TimelineContainer heading = "EXPERIENCE" myRef = {expRef}/>
            <TimelineContainer heading = "EDUCATION" myRef = {eduRef}/>
            <Skills myRef = {skillRef}/>
            <Contact myRef= {contactRef}/>
        </div>
    );
}

export default Resume;