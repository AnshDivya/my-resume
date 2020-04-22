import React from 'react';
import '../myStyles/Image.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="image_leftToRight"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <img alt = 'coding' className = {this.props.styleClass}  src = {this.props.src} />             
            </ReactCSSTransitionGroup>
        );

        
    }

    componentDidMount() {
        if(this.props.styleClass === 'profilePic') {
            console.log('HEY THE IMAGE HAS BEEN LOADED');
            
        }
    }
    
}

export default Image;