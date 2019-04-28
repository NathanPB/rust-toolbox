import * as React from 'react';
import Page from "./Page";
import {
  Avatar,
  CircularProgress,
  Collapse,
  IconButton,
  ListItem, ListItemSecondaryAction,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Search as IconSearch,
  SortByAlpha as IconSort,
  Menu, ArrowDownward,
  VerifiedUser
} from "@material-ui/icons"
import ServerListNavigator from "../../serverList/ServerListNavigator";
import Infinite from 'react-infinite';
import './ServerList.css';
import Badge from "../Badge";
import {AutoSizer} from "react-virtualized";

export default class ServerList extends Page {

  constructor(props) {
    super(props, 'Server List');
    this.state.nextNavigator = ServerListNavigator.createNavigator();
    this.state.servers = [];
    this.state.isLoading = false;
    this.state.showButtons = true;

    this.loadData = this.loadData.bind(this);
    this.buildElement = this.buildElement.bind(this);
  }

  renderHeader = () => {
    return (
      <div style={{width: '100%', zIndex: 1}} className="themed-container">
        <Toolbar disableGutters={true}>
          <IconButton style={{margin: '0.2em'}} align="left">
            <Menu
              style={{ color: 'white', fontSize: '1.5em' }}
              className="themed-container"
              onClick={() => this.setState({toMenu: true})}
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

  buildElement = (server) =>
    <ListItem className="infinite-list-item server-item" style={{ minHeight: 60, color: 'white', cursor: 'pointer', width: '96%', marginLeft: '2%'}}>
      <Avatar src={`https://www.countryflags.io/${server.attributes.country}/flat/64.png`}/>

      <ListItemText
        primary={
          <Typography style={{ color: 'white' }}>
            { false && //TODO something to check if the server is a official one
              (
                <span style={{ marginRight: '0.5em' }} title="Official Server">
                  <VerifiedUser style={{ fontSize: 12, color: 'gold'}}/>
                </span>
              )
            }
            {server.attributes.name}
          </Typography>
        }
        secondary={
          <div style={{ whiteSpace: 'nowrap' }}>
            <Badge
              display={server.attributes.status !== 'online'}
              color="#D72439"
              tooltip="Server Status"
            >
              {server.attributes.status}
            </Badge>
            <Badge
              color="blue"
              tooltip="Map Type"
            >
              {
                //Select the icon according to the latitude of the physical server location
                `${['🌎', '🌍', '🌏'][Math.round(server.attributes.location[1] / 128) + 1]} ${server.attributes.details.map}`
              }
            </Badge>
            <Badge
              color="blue"
              tooltip="Map Age"
            >
              {
                //Calculates the server map time based on the last change date
                '📅 ' + ((+new Date() - +new Date(server.attributes.details.rust_last_seed_change)) / 86400000).toFixed(2)
              } Days
            </Badge>
            <Badge
              display={server.attributes.details.rust_modded}
              color="blue"
              tooltip="Modded Server"
            >
             <span> 🔧 Modded</span>
            </Badge>
          </div>
        }
      />

      <ListItemSecondaryAction style={{ paddingRight: '1em' }}>
        <Typography style={{ color: 'white', blankSpace: 'nowrap' }}>{server.attributes.players}/{server.attributes.maxPlayers}</Typography>
      </ListItemSecondaryAction>

    </ListItem>;

  loadData = () => {
    console.log('aaa');
    if(this.state.nextNavigator && this.state.nextNavigator.next){
      this.setState({isLoading: true}, ()=> {
        let servers = this.state.servers;
        this.state.nextNavigator.data().then(async data => {
          servers = servers.concat(data.map(it => this.buildElement(it)));
          this.setState({
            isLoading: false,
            nextNavigator: await this.state.nextNavigator.next(),
            servers: servers
          });
        });
      })
    }
  };

  drawnPage = () => {
    return(
      <AutoSizer>
        {
          ({ height, width }) => (
            (height > 0 && width > 0) &&
              <div style={{ width: width }}>
                <Infinite
                  containerHeight={height}
                  elementHeight={60}
                  infiniteLoadBeginEdgeOffset={128}
                  isInfiniteLoading={this.state.isLoading}
                  loadingSpinnerDelegate={()=><CircularProgress/>}
                  onInfiniteLoad={this.loadData}
                  timeScrollStateLastsForAfterUserScrolls={150}
                >
                  {this.state.servers}
                </Infinite>
              </div>
          )
        }
      </AutoSizer>
    );
  };
}
