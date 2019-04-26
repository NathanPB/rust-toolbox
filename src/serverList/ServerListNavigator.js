import Axios from 'axios';

const API_URL = 'https://api.battlemetrics.com/servers';
export default class ServerListNavigator {

  static createNavigator = (options) => {
    return new ServerListNavigator(null, API_URL, options);
  };

  constructor(parentNavigator, url, options){
    this.navigation = {};
    if(parentNavigator){
      this.navigation.previous = parentNavigator;
    }

    this.currentUrl = url;
    this.options = options;
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
