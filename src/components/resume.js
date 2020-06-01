import React, {useEffect, useRef, useState} from 'react';
import Header from './header';
import Intro from './intro'
import Background from './background';
import TextDescription from './textDescription';
import TimelineContainer from './timeline-container';
import Skills from './skill-container';
import Contact from './contact';
import VerticalMenu from './VerticalMenu';
import {animateScroll as scroll } from 'react-scroll';

function Resume() {

    const [ state, setState ] = useState({
        view: '',
        isMenuVisible: false,
        scrollTo: ''
    });

    console.log(state);
    
    const handleMenu = () => {
        setState({...state, isMenuVisible: !state.isMenuVisible});
        console.log('MENU VISIBILITY CHANGED');
    }
    
    const handleScrollTo = (target) => {

        setState({...state, scrollTo: target, isMenuVisible: false});
        console.log('SCROLL TO CHANGED TO '+ target);
    }

    const changeView = (newView) => {
        setState({...state, view: newView});
    }
    const handleScroll = () => {

        let newIndex = state.index;
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
        
        // console.log('CHANGING FROM '+state.index+' TO '+newIndex);
        
        // setState({...state, index: newIndex }); 
        // console.log('CHANGED TO '+state.index);
        
            
    }
    useEffect(() => {

        console.log('RENDERED ');
        console.log(state);
        
        // if(!state.isMenuVisible) {
        //  window.addEventListener(, handleScroll);
        //     console.log('SCROLL EVENT ADDED');   
        // }
        // else {
        //     window.removeEventListener('scroll', handleScroll);
        //     console.log('SCROLL EVENT REMOVED');
            
        // }
            
        
        if(state.scrollTo !== '') {
            const target = document.getElementById(state.scrollTo);
            if(target) {
                const top = target.getBoundingClientRect().top + window.scrollY;
                scroll.scrollTo(top);
                setState({...state, scrollTo: ''});

            }
        }
    })

    const expRef = useRef(null);
    const eduRef = useRef(null);
    const skillRef = useRef(null);
    const contactRef = useRef(null);
    return (
        
        <div>
            <Header selected = {state.view} handleMenu = {handleMenu} isMenuVisible = {state.isMenuVisible} />
            {state.isMenuVisible?
                <VerticalMenu handleScrollTo = {handleScrollTo} />:<>
                <Background>
                    <Intro />
                </Background>
                <TextDescription />
                <TimelineContainer heading = "EXPERIENCE" myRef = {expRef} changeView = {changeView} />
                <TimelineContainer heading = "EDUCATION" myRef = {eduRef} changeView = {changeView} />
                <Skills heading = "SKILLS" myRef = {skillRef} changeView = {changeView} />
                <Contact heading = 'CONTACT' myRef= {contactRef} changeView = {changeView} />
                </>
            }
        </div>
        
    );
}

export default Resume;