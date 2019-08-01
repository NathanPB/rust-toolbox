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

import * as React from 'react'
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu, Settings} from "@material-ui/icons";

export default class Page extends React.Component {

  constructor(props, title) {
    super(props);
    this.state = {
      title: title,
      toMenu: false
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.drawnPage = this.drawnPage.bind(this);
    this.drawnSubheader = this.drawnSubheader.bind(this);
  }

  renderHeader = () => {
    return (
      <div style={{width: '100%', zIndex: 1}} className="themed-container">
        <Toolbar disableGutters={true}>
          <IconButton style={{margin: '0.2em'}} align="left" href="/">
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
          <IconButton href="#" disabled>
            <Settings style={{ color: 'white', fontSize: '1.5em' }}/>
          </IconButton>
        </Toolbar>
        {this.drawnSubheader()}
      </div>
    )
  };

  drawnSubheader = () => {
    return undefined;
  };

  drawnPage = () => {
    return undefined;
  };

  render = () => <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
    { this.renderHeader() }
    <div style={{flexGrow: 100}}>
      { this.drawnPage() }
    </div>
  </div>
}
