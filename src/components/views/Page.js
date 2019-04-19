import * as React from 'react'
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu, Settings} from "@material-ui/icons";

export class Page extends React.Component {

  constructor(props, title) {
    super(props);
    this.state = {
      title: title
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.drawnPage = this.drawnPage.bind(this);
    this.drawnSubheader = this.drawnSubheader.bind(this);
  }

  renderHeader = () => {
    return (
      <div style={{position: 'fixed', width: '100%', zIndex: 1}} className="themed-container">
        <Toolbar disableGutters={true}>
          <IconButton style={{margin: '0.2em'}} align="left">
            <Menu style={{ color: 'white', fontSize: '1.5em' }} className="themed-container"/>
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
          <IconButton>
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

  render = () => {
    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        { this.renderHeader() }
        <div style={{flexGrow: 100}}>
          { this.drawnPage() }
        </div>
      </div>
    )
  }
}
