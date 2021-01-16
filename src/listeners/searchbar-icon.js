const addListenerSubmitSearchByClick = (searchbar, searchbarIcon) => {
  searchbarIcon.addEventListener('click', () => {
    console.log(searchbar.value);
  });
};

export default addListenerSubmitSearchByClick;
