import selectElement from '../utils/element-selector';
import addListenerSubmitSearchByEnter from '../listeners/searchbar';
import addListenerSubmitSearchByLocation from '../listeners/location-btn';

const bindEventHandlers = () => {
  const greetingMsg = selectElement('greeting-msg');
  const searchbar = selectElement('location-search');
  addListenerSubmitSearchByEnter(searchbar, greetingMsg);
  const locationBtn = selectElement('location-btn');
  addListenerSubmitSearchByLocation(locationBtn);
};

export default bindEventHandlers;
