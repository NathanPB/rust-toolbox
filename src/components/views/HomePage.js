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
import MenuItem from "../MenuItem";
import Page from "./Page";
import {IconButton, List} from "@material-ui/core";
import {AccountCircle, Settings} from "@material-ui/icons";
import styles from './HomePage.module.css';

export default class HomePage extends Page {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rust Toolbox',
            buttons: [
              <MenuItem title="Server List" icon="/icons/server_list.png" goto="servers"/>,
            ]
        };
    }

    scrollEffect = (event) => {
      if(event.target.scrollTop <= 256){
      event.target.style.backgroundPositionY = `${(event.target.scrollTop / 4 - 64) | 0}px`;
     }
    };

    renderHeader = () => (
        <header className={styles.header}>
          <IconButton href="#" disabled>
            <AccountCircle/>
          </IconButton>
          <IconButton href="#" disabled>
            <Settings/>
          </IconButton>
        </header>
    );

    drawnPage = () => (
        <div className={styles['page-container']} style={{backgroundPositionY: '-64px'}} onScroll={this.scrollEffect}>
          <div className={styles['title-spacer']}/> {/* this is kind of a spacer, don't touch, its working */}
          <img src="/img/title.png" alt="Rust Toolbox" className={styles.title}/>
          <List component="li" className={styles['button-list']}>
            {this.state.buttons}
          </List>
          <footer className={styles.footer}>
            This is a third-part app and it's not affiliated with Facepunch Studios Ltd
          </footer>
        </div>
    )
}
