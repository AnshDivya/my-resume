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
                    
                    props.changeView(props.heading)

                }
            }}
        >
            <div ref = {props.myRef}>
            <div className = "heading">
                <h1>SKILLS</h1>
            </div>
            <hr />
            <div className = "skills-container">
                <Skill name = "React Js React Js"/>
                <Skill name = "REACT JS"/>
                <Skill name = "REACT JS"/>
                <Skill name = "REACT JS"/>
                <Skill name = "REACT JS"/>
                <Skill name = "REACT JS"/>
            </div>
        </div>
        </Waypoint>
        
    );
}

export default Skills;