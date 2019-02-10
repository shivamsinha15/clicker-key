import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});



const networkFilters = {
  urls: [
    "http://*/*",
    "https://*/*",
    "*://*/*",
    "<all_urls>",
  ]
};


  chrome.webRequest.onBeforeRequest.addListener((details) => {

    
      if(details.method=="POST") {
        console.log(details);
      }
    
    },networkFilters,['requestBody']);

wrapStore(store, {
  portName: 'example'
});
