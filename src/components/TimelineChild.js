import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function TimelineChild(props) {

    const { showAnimation } = props;

    return (<div className = "timeline-container">{
        showAnimation?<><ReactCSSTransitionGroup
        transitionName="leftToRight"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className = "year-and-role">
            <div className = "movable-container">
                <h2>{props.years}</h2>
                <h3>{props.role}</h3>
            </div>
        </div>
    </ReactCSSTransitionGroup>
    
    <div className = "org-and-desc">
        
        <ReactCSSTransitionGroup
        transitionName="dotAnimation"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}>
            <div className = "dot"></div>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
        transitionName="rightToLeft"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
            <div className = "movable-container">
                <h3>{props.org}</h3>
                <p>{props.description}</p>
            </div>
        </ReactCSSTransitionGroup>
        
    </div></>: (
        <>
            <div className = "year-and-role">
                <div className = "movable-container">
                    <h2>{props.years}</h2>
                    <h3>{props.role}</h3>
                </div>
            </div>
            <div className = "org-and-desc">
                <div className = "dot"></div>
                <div className = "movable-container">
                    <h3>{props.org}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
    }
    
</div>);
}

export default TimelineChild;