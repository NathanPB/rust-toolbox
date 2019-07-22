/*
Rust Toolbox Copyright (C) 2019  Nathan P. Bombana, Lucas Vicari

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
            className="button-style themed-container"
          />
          <ListItemText
            primary={
              <Typography variant="h4" align="center">
                <span className='button-label-text'>{this.props.title}</span>
              </Typography>
            }
            className="button-style themed-container"
            style={{
              marginLeft: '1em',
              minHeight: '3em',
            }}
          />
        </ListItem>
      )
    }
  }
}
