import * as React from 'react';
import './Badge.css';

export default class Badge extends React.Component {

  render = () => {
    return(
      ((( this.props.display === undefined) || this.props.display ) && this.props.children) ?
      <div
        title={this.props.tooltip}
        className="Badge"
        style={{
          ...this.props.style,
          backgroundColor: this.props.color,
        }}>
        {this.props.children}
      </div> : null
    )
  }
}
