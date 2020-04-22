import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Waypoint } from 'react-waypoint';

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
        return this.state.showAnimation?(
            <ReactCSSTransitionGroup
                transitionName="form_leftToRight"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className = 'form-container'>
                    <form>
                        <input type = 'text' placeholder = 'Name' />
                        <input type = 'email' placeholder = 'Email' />
                        <input type = 'text' placeholder = 'Subject'  className = 'subject' />
                        <textarea placeholder = 'Message'/>
                        <button type = 'submit'>Submit</button>
                    </form>
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
                    <form>
                        <input type = 'text' placeholder = 'Name' />
                        <input type = 'email' placeholder = 'Email' />
                        <input type = 'text' placeholder = 'Subject'  className = 'subject' />
                        <textarea placeholder = 'Message'/>
                        <button type = 'submit'>Submit</button>
                    </form>
                </div>
            </>
            
        )
    }
}

export default ContactForm;