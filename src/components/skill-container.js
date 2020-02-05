import React from 'react';
import '../myStyles/skills.css';
import Skill from './skill';

function Skills() {
    return (
        <div>
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
    );
}

export default Skills;