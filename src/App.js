import React, {useEffect, useRef, useState} from 'react';
import Header from './components/header';
import Intro from './components/intro'
import TextDescription from './components/textDescription';
import TimelineContainer from './components/timeline-container';
import Skills from './components/skill-container';
import Contact from './components/contact';
import VerticalMenu from './components/VerticalMenu';
import {animateScroll as scroll } from 'react-scroll';
import './App.css';
  
function App() {
  const [ state, setState ] = useState({
    view: '',
    isMenuVisible: false,
    scrollTo: '',
    showAnimation: true
});

console.log(state);

const handleMenu = () => {
    setState({...state, isMenuVisible: !state.isMenuVisible, showAnimation: false});
    console.log('MENU VISIBILITY CHANGED');
}

const handleScrollTo = (target) => {

    setState({...state, scrollTo: target, isMenuVisible: false});
    console.log('SCROLL TO CHANGED TO '+ target);
}

const changeView = (newView) => {
    setState({...state, view: newView});
}

useEffect(() => {

    console.log('APP.JS AFTER RENDERING!!!!!!!!!!!!!!1111');
    console.log(state);
    
    if(state.scrollTo !== '') {
        const target = document.getElementById(state.scrollTo);
        if(target) {
            const top = target.getBoundingClientRect().top + window.scrollY;
            scroll.scrollTo(top);
            setState({...state, scrollTo: ''});

        }
    }
}, [state]);

const expRef = useRef(null);
const eduRef = useRef(null);
const skillRef = useRef(null);
const contactRef = useRef(null);

console.log('IN APP.JS: '+state.showAnimation);

return (
    
    <div>
        <Header selected = {state.view} handleMenu = {handleMenu} isMenuVisible = {state.isMenuVisible} />
        {state.isMenuVisible?
            <VerticalMenu handleScrollTo = {handleScrollTo} />:<>
            <Intro showAnimation = {state.showAnimation}/>
            <TextDescription />
            <TimelineContainer showAnimation = {state.showAnimation} heading = "EXPERIENCE" myRef = {expRef} changeView = {changeView} />
            <TimelineContainer showAnimation = {state.showAnimation} heading = "EDUCATION" myRef = {eduRef} changeView = {changeView} />
            <Skills showAnimation = {state.showAnimation} heading = "SKILLS" myRef = {skillRef} changeView = {changeView} />
            <Contact showAnimation = {state.showAnimation} heading = 'CONTACT' myRef= {contactRef} changeView = {changeView} />
            </>
        }
    </div>
    
);
}

export default App;
