import React from 'react';
import '../myStyles/expEdu.css';
import TimeLine from './timeline';  
import { Waypoint } from 'react-waypoint';
class TimelineContainer extends React.Component {
    
    
    componentDidMount() {
        console.log(this.props.heading + ' RENDERED');
        
    }
    render() {
        return (
            <Waypoint
                onEnter = {({ previousPosition, currentPosition, event }) => {

                    if((previousPosition === "below" || previousPosition === 'above') && currentPosition === "inside") {
                        this.props.changeView(this.props.heading)
                    }
                }}
            >
                <div ref = {this.props.myRef}>
            
                    <div className = "experience" id = {this.props.heading}>
                        <h1>{this.props.heading}</h1>
                    </div> 
                    <hr className = "hr-bottom"/>
                    
                    <TimeLine {...this.props} years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                    Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                    add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                    your users know a little more about you."/>
                    <TimeLine {...this.props} years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                    Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                    add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                    your users know a little more about you."/>
                    <TimeLine {...this.props} years = "2016-2020" role = "Bachelor's Degree" org = "NSIT" description = "I'm a paragraph. 
                    Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                    add your own content and make changes to the font. I’m a great place for you to tell a story and let 
                    your users know a little more about you."/>
                    <hr />
                </div>
            </Waypoint>
    )
    }
}

export default TimelineContainer;