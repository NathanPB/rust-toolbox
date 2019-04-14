import * as React from 'react';
import MenuItem from "../MenuItem";
import {Page} from "./Page";
import {IconButton, List, Toolbar} from "@material-ui/core";
import {AccountCircleOutlined, Settings} from "@material-ui/icons";
import jQuery  from 'jquery';
import './HomePage.css';

export default class HomePage extends Page {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rust Toolbox',
            buttons: [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0].map((_, index) => (<MenuItem title={`Button ${index}`}/>))
        }
    }

    renderHeader = () => {
      return (
        <div style={{position: 'fixed', width: '100%', zIndex: 1}}>
          <Toolbar>
            <IconButton>
              <AccountCircleOutlined/>
            </IconButton>
            <div style={{flexGrow: 1}}/>
            <IconButton>
              <Settings/>
            </IconButton>
          </Toolbar>
        </div>
      )
    };

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
          </div>
        )
    }
}
