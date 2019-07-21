import * as React from 'react';
import MenuItem from "../MenuItem";
import Page from "./Page";
import {IconButton, List} from "@material-ui/core";
import { AccountCircle, Settings } from "@material-ui/icons";
import './HomePage.css';

export default class HomePage extends Page {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rust Toolbox',
            buttons: [
              <MenuItem title="Server List" icon="/icons/server_list.png" goto="servers"/>
            ]
        }
    }

    renderHeader = () =>
      (
        <header>
          <IconButton disabled>
            <AccountCircle/>
          </IconButton>
          <IconButton disabled>
            <Settings/>
          </IconButton>
        </header>
      );

    drawnPage = () => {
        return(
          <div className="page-container" style={{backgroundPositionY: '-64px'}} onScroll={(event) => {
            if(event.target.scrollTop <= 256){
              event.target.style.backgroundPositionY = `${(event.target.scrollTop / 4 - 64) | 0}px`;
            }
          }}>
            <div style={{height: 256}}/>
            <img src="/img/title.png" alt="Rust Toolbox" className="title"/>
            <List>
              {this.state.buttons}
            </List>
            <footer>
              This is a third-part app and it's not affiliated with Facepunch Studios Ltd
            </footer>
          </div>
        )
    }
}
