import React from 'react';
import '../myStyles/experience.css';
import TimeLine from './timeline';  
class Experience extends React.Component {
    
    handleScroll = e => {
        console.log("Hello Divyansh");
        let element = e.target;
        console.log(element.scrollHeight+" "+element.scrollHeight+" "+element.clientHeight);
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          alert("Hey! Divyansh"+element);
        }
      }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    render() {
        return (

            <div onScroll = {this.handleScroll}>
            
            <div className = "experience">
                <h1>EXPERIENCE</h1>
            </div> 
            <hr className = "hr-bottom"/>
            
            <TimeLine years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                your users know a little more about you."/>
                <TimeLine years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                your users know a little more about you."/>
                <TimeLine years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                your users know a little more about you."/>
            <hr />
        </div>
        
    )
    }
}

export default Experience;