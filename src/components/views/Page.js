import * as React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";

export class Page extends React.Component {

  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this)
  }

  renderHeader = () => {
    return (
      <AppBar position="static" style={{flexGrow: 1}}>
      <Toolbar>
        <Typography style={{flexGrow: 100}}>{this.state.title}</Typography>
        <IconButton>
          <AccountCircle/>
        </IconButton>
      </Toolbar>
    </AppBar>
    )
  };

  render = () => {
    return(
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        { this.renderHeader() }
        <div style={{flexGrow: 100}}>
          { this.drawnPage() }
        </div>
      </div>
    )
  }
}
