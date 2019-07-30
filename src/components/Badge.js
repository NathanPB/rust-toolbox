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
import styles from './Badge.module.css';

export default class Badge extends React.Component {

  render = () => {
    return(
      ((( this.props.display === undefined) || this.props.display ) && this.props.children) ?
      <div
        title={this.props.tooltip}
        className={styles.badge}
        style={{
          ...this.props.style,
          backgroundColor: this.props.color,
        }}>
        {this.props.children}
      </div> : null
    )
  }
}
