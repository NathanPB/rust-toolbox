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

import {VerifiedUser} from "@material-ui/icons";
import Badge from "../Badge";
import * as React from "react";

export default function ServerListItem(props) {

  const {
    country,
    name,
    players,
    maxPlayers,
    status,
    latitude,
    map,
    lastSeedChange,
    modded
  } = props;

  return(
    <article className="infinite-list-item server-item">
      <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt={`flag ${country}`}/>
      <section className="server-info">

        <section style={{ display: 'flex', flexGrow: '100', maxWidth: '100%' }}>
          <section className="server-title" title={name}>
            { false && /* TODO something to check if the server is a official one */ (
              <span style={{ marginRight: '0.5em' }} title="Official Server">
                <VerifiedUser style={{ fontSize: 12, color: 'gold'}}/>
              </span>
            )}
            {name}
          </section>
          <section className="server-players">
            {players}/{maxPlayers}
          </section>
        </section>

        <section className="badges">
          <Badge
            display={status !== 'online'}
            color="#D72439"
            tooltip="Server Status"
          >
            {status}
          </Badge>
          <Badge
            color="blue"
            tooltip="Map Type"
          >
            {
              //Select the icon according to the latitude of the physical server location
              `${['🌎', '🌍', '🌏'][Math.round(latitude / 128) + 1]} ${map}`
            }
          </Badge>
          <Badge
            color="blue"
            tooltip="Map Age"
          >
            {
              //Calculates the server map time based on the last change date
              '📅 ' + ((+new Date() - +new Date(lastSeedChange)) / 86400000).toFixed(2)
            } Days
          </Badge>
          <Badge
            display={modded}
            color="blue"
            tooltip="Modded Server"
          >
            <span> 🔧 Modded</span>
          </Badge>
        </section>

      </section>
    </article>
  );
}
