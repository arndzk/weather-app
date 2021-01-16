import showLoadingSpinner from '../modules/loading-spinner';

const addListenerSubmitSearchByEnter = (searchbar, greetingMsg) => {
  searchbar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      hideGreetingMsg(greetingMsg);
      setTimeout(() => showLoadingSpinner(), 1000);
    }
  });
};

const hideGreetingMsg = (greetingMsg) => {
  greetingMsg.addEventListener('transitionend', () => {
    greetingMsg.remove();
  });
  greetingMsg.style.opacity = '0';
};

export default addListenerSubmitSearchByEnter;
