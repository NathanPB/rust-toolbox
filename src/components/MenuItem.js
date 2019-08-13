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
import {Link} from 'react-router-dom';
import styles from './MenuItem.module.css';

export default class MenuItem extends React.Component {

  render = () =>
    <Link to={this.props.goto} style={{ textDecoration: 'none' }}>
      <li className={styles['menu-item']}>
        <img src={this.props.icon} className={`${styles.icon} themed-container`}/>
        <div className={`${styles.title} themed-container`}>
          <span className={styles.label}>{this.props.title}</span>
        </div>
      </li>
    </Link>;

}
