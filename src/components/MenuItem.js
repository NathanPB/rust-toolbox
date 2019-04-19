import * as React from 'react';
import {Avatar, ListItem} from "@material-ui/core";
import {Redirect} from "react-router";
import './MenuItem.css';

export default class MenuItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {redirecting: false};
  }

  render = () => {
    if(this.state.redirecting) {
      return (<Redirect to={this.props.goto}/>)
    } else {
      return (
        <ListItem
          button={true}
          onClick={ () => this.setState({redirecting: true}) }
          disabled={this.props.disabled === undefined ? false : this.props.disabled}
          style={{cursor: 'pointer'}}
        >
          <Avatar
            src={this.props.icon}
            className="button-style"
          />
          <div style={{ flexGrow: 100, marginLeft: '1em' }} className="button-style">
            <img
              src={this.props.title}
              alt={this.props.title}
              style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }}
            />
          </div>
        </ListItem>
      )
    }
  }
}
