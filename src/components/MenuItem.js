import * as React from 'react';
import {Avatar, ListItem, ListItemText, Typography} from "@material-ui/core";
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
          <ListItemText
            primary={
              <Typography style={{color: '#FFFFFF', fontFamily: 'rtb', textTransform: 'uppercase'}} variant="h4" noWrap={true} align="center">
                {this.props.title}
              </Typography>
            }
            className="button-style"
            style={{
              color: 'white',
              marginLeft: '1em',
              minHeight: '3em',
            }}
          />
        </ListItem>
      )
    }
  }
}
