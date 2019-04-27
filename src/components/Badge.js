import * as React from 'react';

export default class Badge extends React.Component {

  render = () => {
    return(
      (((this.props.display === undefined) || this.props.display ) && this.props.children) ?
      <div title={this.props.tooltip} style={{ ...this.props.style, backgroundColor: this.props.color, borderRadius: 4, padding: 2, display: 'inline', color: 'white', marginRight: 4, textTransform: 'capitalize'}}>
        {this.props.children}
      </div> : null
    )
  }
}
