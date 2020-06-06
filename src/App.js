import React, {useEffect, useState} from 'react';
import Header from './components/header';
import Intro from './components/intro'
import TextDescription from './components/textDescription';
import TimelineContainer from './components/timeline-container';
import Skills from './components/skill-container';
import Contact from './components/contact';
import VerticalMenu from './components/VerticalMenu';
import {animateScroll as scroll } from 'react-scroll';
import './App.css';
import Footer from './components/Footer';
  
const expData = [
    {   id: 1,
        years: "JUNE-JULY 2019",
        role: "ASDE INTERN",
        org: "EXPEDIA GROUP",
        description: "Worked on the VOYAGER NEXT PLATFORM.The Task was to add an Agent to Agent Consult feature on the platform. Using this feature, an agent could consult to another agent while serving a customer. Technologies Used: JavaScript, ReactJS, CSS, Redux."
    }
]

const eduData = [
    
    {
        id: 3,
        years: "2016-2020",
        role: "B.E.(IT UNDERGRAD)",
        org: "NSIT DWARKA, NEW DELHI",
        description: "I am currently in my fourth year. During these four years, I tried a number of things such as Competitive Programming, Web Development, Machine Learning. I did a number of projects such as News App, Digit Recognition Model, English to Hindi Translator etc."
    },
    {
        id: 1,
        years: "2014-2015",
        role: "CLASS XII",
        org: "GBSSS HASTSAL NEW DELHI",
        description: "Science Stream(PCM) 95.4%"
    },
    {
        id: 2,
        years: "2012-2013",
        role: "CLASS X",
        org: "GBSSS HASTSAL NEW DELHI",
        description: "10.0 CGPA"
    }
]

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

console.log('IN APP.JS: '+state.showAnimation);

return (
    
    <div>
        <Header selected = {state.view} handleMenu = {handleMenu} isMenuVisible = {state.isMenuVisible} />
        {state.isMenuVisible?
            <VerticalMenu handleScrollTo = {handleScrollTo} />:<>
            <Intro showAnimation = {state.showAnimation}/>
            <TextDescription />
            <TimelineContainer showAnimation = {state.showAnimation} heading = "EXPERIENCE" changeView = {changeView} data = {expData}/>
            <TimelineContainer showAnimation = {state.showAnimation} heading = "EDUCATION"  changeView = {changeView} data = {eduData}/>
            <Skills showAnimation = {state.showAnimation} heading = "SKILLS" changeView = {changeView} />
            <Contact showAnimation = {state.showAnimation} heading = 'CONTACT' changeView = {changeView} />
            <Footer />
            </>
        }
    </div>
    
);
}

export default App;
