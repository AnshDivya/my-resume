import React from 'react';
import { Waypoint } from 'react-waypoint';

import '../myStyles/basicExample.css';
class BasicExample extends React.Component {
  /**
   * @return {Object}
   */

  constructor(props) {
      super(props);

      this.state = {
          message: ''
      }
  }
  getInitialState() {
    return {};
  }

  _setMessage(msg) {
    this.setState({ message: msg });
  }

  /**
   * @return {Object}
   */
  _renderMessage() {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="basic-example__message">
          {this.state.message}
      </div>
    );
  }

  /**
   * @return {Object}
   */
  render() {
    return (
      <div className="basic-example">
        {this._renderMessage()}
        <div className>
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
          <div className="basic-example__waypoint-line"/>
          <Waypoint
            onEnter={this._setMessage.bind(this, 'Waypoint entered')}
            onLeave={this._setMessage.bind(this, 'Waypoint left')}
          />
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
          <div className="basic" />
        </div>
      </div>
    );
  }
}
  
export default BasicExample;