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

import {CircularProgress} from "@material-ui/core";
import {AutoSizer} from "react-virtualized";
import * as React from "react";
import ServerListNavigator from "../../serverList/ServerListNavigator";
import ServerListItem from "./ServerListItem";
import './ServerList.css';

export default function ServerList(props) {

  const [ loading, setLoading ] = React.useState(false);
  const [ servers, setServers ] = React.useState([]);
  const sort = props.sort || 'rank';
  const filter = props.filter || {};

  const [ nextNavigator, setNextNavigator ] = React.useState(ServerListNavigator.createNavigator({sort: sort, ...filter}));

  const buildElement = (server) =>
    <ServerListItem
      country={server.attributes.country}
      name={server.attributes.name}
      players={server.attributes.players}
      maxPlayers={server.attributes.maxPlayers}
      status={server.attributes.status}
      latitude={server.attributes.location[1]}
      map={server.attributes.details.map}
      lastSeedChange={server.attributes.details.rust_last_seed_change}
      modded={server.attributes.details.rust_modded}
    />;

  React.useEffect(() => {
    if(loading) {
      let newServers = servers;
      nextNavigator.data().then(async data => {
        newServers = newServers.concat(data.map(it => buildElement(it)));
        setLoading(false);
        setNextNavigator(await nextNavigator.next());
        setServers(newServers);
      });
    }
  });

  const loadData = () => {
    if(nextNavigator && nextNavigator.next){
      setLoading(true);
    }
  };

  const checkNeedMoreData = (elementHeight, element) => {
    let scrollOffset = (element.scrollHeight - elementHeight) - element.scrollTop;
    return scrollOffset <= 512 || servers.length === 0;
  };

  return (
    <AutoSizer>
      {
        ({ height, width }) => (
          (height > 0 && width > 0) &&
          <section
            style={{ width: width, height: height }}
            className="server-list"
            onScroll={(e) => {
              if(checkNeedMoreData(height, e.target)) {
                loadData()
              }
            }}
          >

            { /* Yeah, pretty shitty code but works better than the last one */ }
            { servers.length === 0 ? loadData() : null || servers }

            {loading && (
              <CircularProgress className="loading-spinner" />
            )}
          </section>
        )
      }
    </AutoSizer>
  )
}
