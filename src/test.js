import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './myStyles/test.css';
function Test() {
    return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={10000}
          transitionEnter={false}
          transitionLeave={false}>
          <div className = 'test'><h1>Fading at Initial Mount</h1></div>
        </ReactCSSTransitionGroup>
      );
}

export default Test;