import selectElement from './element-selector';

const removeElement = (parentElementId, childElementId) => {
  const parentElement = selectElement(parentElementId);
  const childElement = selectElement(childElementId);
  parentElement.removeChild(childElement);
};

export default removeElement;
