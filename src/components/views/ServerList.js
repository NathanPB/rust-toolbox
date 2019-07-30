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
import Page from "./Page";
import {
  Collapse,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Search as IconSearch,
  SortByAlpha as IconSort,
  Menu, ArrowDownward,
  VerifiedUser
} from "@material-ui/icons"
import '../serverList/ServerListItem.module.css';
import Badge from "../Badge";
import ServerListComponent from '../serverList/ServerList';

export default class ServerList extends Page {

  constructor(props) {
    super(props, 'Server List');
    this.state.sort = 'rank';
    this.state.filter = {};
    this.state.showButtons = true;

    this.onFilter = this.onFilter.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  onFilter = (filterObject) => {
    this.setState({
      filter: filterObject
    });
  };

  onSort = (sortedBy) => {
    this.setState({
      sort: sortedBy
    });
  };

  renderHeader = () => {
    return (
      <div style={{width: '100%', zIndex: 1}} className="themed-container">
        <Toolbar disableGutters={true}>
          <IconButton
            style={{margin: '0.2em'}}
            align="left"
            onClick={() => this.setState({toMenu: true})}
          >
            <Menu
              style={{ color: 'white', fontSize: '1.5em' }}
              className="themed-container"
            />
          </IconButton>
          <div style={{flexGrow: 1}}>
            <Typography
              style={{
                fontFamily: 'rtb',
                textTransform: 'uppercase',
                color: 'white',
                fontSize: '2em'
              }}
              align="center"
            >
              {this.state.title}
            </Typography>
          </div>
          <IconButton
            onClick={() => this.setState({showButtons: !this.state.showButtons})}
          >
            <ArrowDownward
              className={`${this.state.showButtons && 'arrow-reversed'}`}
              style={{ color: 'white', fontSize: '1.5em', transition: 'all 0.5s' }}
            />
          </IconButton>
        </Toolbar>
        {this.drawnSubheader()}
      </div>
    )
  };

  drawnSubheader = () => {
    let iconStyles = { color: 'white', fontSize: '2em' };
      return (
        <Collapse in={this.state.showButtons}>
          <Toolbar style={{ justifyContent: 'space-between', flexGrow: 100 }}>
            <IconButton>
              <IconSearch style={iconStyles} className='themed-container'/>
            </IconButton>
            <IconButton>
              <IconSort style={iconStyles} className='themed-container'/>
            </IconButton>
          </Toolbar>
        </Collapse>
      )
  };

  drawnPage = () => <ServerListComponent sort={this.state.sort} filter={this.state.filter}/>
}
