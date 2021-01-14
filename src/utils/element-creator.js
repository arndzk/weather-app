const createElement = (tag, id, className = null, textContent = null) => {
  const element = document.createElement(tag);
  element.setAttribute('id', id);
  if (className != null) {
    element.classList.add(className);
  }
  if (textContent != null) {
    element.textContent = textContent;
  }
  return element;
};

export default createElement;
