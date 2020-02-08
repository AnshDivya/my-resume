import React, {Component} from 'react';

 class NavigatorButton extends Component {
    
    constructor(props) {
        super(props);

        this.anchorTarget = null;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.anchorTarget.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    componentDidMount() {
        this.anchorTarget = document.getElementById(this.props.itemName);
    }

    render() {
        return (
            <div className = 'navigator-button'>
                <a href={'#' + this.props.itemName} onClick={this.handleClick} aria-label={'Scroll to ' + 
                    this.props.itemName}>
                    {this.props.itemName}
                </a>
            </div>
        );
    }
    
}

export default NavigatorButton;