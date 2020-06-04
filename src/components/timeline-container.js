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
                    
                    {this.props.data.map(ele => <TimeLine {...ele} key = {ele.id}/>)}
                    <hr />
                </div>
            </Waypoint>
    )
    }
}

export default TimelineContainer;