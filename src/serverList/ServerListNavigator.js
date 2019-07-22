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

import Axios from 'axios';

const API_URL = 'https://api.battlemetrics.com/servers?filter[game]=rust';
export default class ServerListNavigator {

  static createNavigator = (options) => {
    return new ServerListNavigator(null, API_URL, options);
  };

  constructor(parentNavigator, url, options = {}){
    this.navigation = {};
    if(parentNavigator){
      this.navigation.previous = parentNavigator;
    }

    this.currentUrl = `${url}&${Object.keys(options).map(key => `${key}=${options[key]}`).join('&')}`;
  }

  next = async () => {
    if(!this.navigation.next && !this.navigation.previous){
      await this.refreshData(); //probably the data was not initialized yet;
    }
    return this.navigation.next;
  };

  previous = () => {
    return this.navigation.previous;
  };

  refreshData = async () => {
    let axiosResponse = await Axios.get(this.currentUrl);
    if(axiosResponse && axiosResponse.data){
      let response = axiosResponse.data;

      if(response.links){
        if(response.links.next && !this.navigation.next){
          this.navigation.next = new ServerListNavigator(this, response.links.next, this.options);
        }
        if(response.links.prev && !this.navigation.previous){
          this.navigation.previous = new ServerListNavigator(null, response.links.prev, this.options);
        }
      }

      if(response.data){
        this.cachedData = response.data;
      }
    }
  };

  data = async () => {
    if(!this.cachedData){
      await this.refreshData();
    }
    return this.cachedData;
  }

}
