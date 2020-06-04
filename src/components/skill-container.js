import React from 'react';
import '../myStyles/skills.css';
import Skill from './skill';
import { Waypoint } from 'react-waypoint';

function Skills(props) {
    return (
        <Waypoint
            onEnter = {({ previousPosition, currentPosition, event }) => {
                console.log('IN '+props.heading);
                
                if((previousPosition === "below" || previousPosition === 'above') && currentPosition === "inside") {
                    console.log('CHANGING VIEW TO '+props.heading);
                    
                    props.changeView(props.heading);

                }
            }}
        >
            <div ref = {props.myRef} id = {props.heading}>
            <div className = "heading">
                <h1>SKILLS & INTERESTS</h1>
            </div>
            <hr />
            <div className = "skills-container">
                <div className = 'skills-compartment skills-compartment-left'>
                    <Skill {...props} name = "Java"/>
                    <Skill {...props} name = "React and Redux"/>
                    <Skill {...props} name = "Javascript"/>
                </div>
                <div className = 'skills-compartment skills-compartment-right'>
                    <Skill {...props} name = "Competitive Programming"/>
                    <Skill {...props} name = "Web Development"/>
                    <Skill {...props} name = "Android Development"/>
                </div>
                
            </div>
        </div>
        </Waypoint>
        
    );
}

export default Skills;