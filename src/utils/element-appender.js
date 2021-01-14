import selectElement from './element-selector';

const appendElement = (parentElement, childElement) => {
  const targetElement = selectElement(parentElement);
  targetElement.appendChild(childElement);
};

export default appendElement;
