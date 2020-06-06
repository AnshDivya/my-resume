import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';
import Form from './Form';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnimation: false
        }
    }

    displayAnimation = () => {
        
        this.setState({
            showAnimation: true
        })
    }

    render() {
        const { showAnimation: animationAllowed } = this.props;
        return !animationAllowed?
        (<div className = 'form-container'>
            <Form />
        </div>)
        :this.state.showAnimation?(
            <ReactCSSTransitionGroup
            transitionName="form_leftToRight"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}
            >
            <div className = 'form-container'>
                <Form />
            </div>
            </ReactCSSTransitionGroup>
        ): (
            <>
                <Waypoint
                onEnter = {({ previousPosition, currentPosition, event }) => {

                if(previousPosition === "below" && currentPosition === "inside") {
                    this.displayAnimation();
                }
              }}
                />

                <div className = 'form-container'>
                    <Form />
                </div>
            </>
            
        )
    }
}

export default ContactForm;