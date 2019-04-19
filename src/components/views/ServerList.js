import * as React from 'react';
import Page from "./Page";
import {IconButton, Toolbar} from "@material-ui/core";
import {
  Search as IconSearch,
  SortByAlpha as IconSort,
  RemoveRedEye as IconEye
} from "@material-ui/icons"

export default class ServerList extends Page {

  constructor(props) {
    super(props, 'Server List');
  }

  drawnSubheader = () => {
    let iconStyles = { color: 'white', fontSize: '2em' };
    return (
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <IconButton>
          <IconSearch style={iconStyles} className='themed-container'/>
        </IconButton>
        <IconButton>
          <IconSort style={iconStyles} className='themed-container'/>
        </IconButton>
        <IconButton>
          <IconEye style={iconStyles} className='themed-container'/>
        </IconButton>
      </Toolbar>
    )
  };
}
