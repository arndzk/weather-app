const buildSignature = (targetElement) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'signature');
  const spanOne = document.createElement('span');
  spanOne.textContent = 'Made with ';
  const spanTwo = document.createElement('span');
  spanTwo.setAttribute('id', 'red-heart');
  spanTwo.classList.add('emoji');
  spanTwo.innerHTML = '&#x2764';
  const spanThree = document.createElement('span');
  spanThree.textContent = ' & ';
  const spanFour = document.createElement('span');
  spanFour.setAttribute('id', 'coffee-cup');
  spanFour.classList.add('emoji');
  spanFour.innerHTML = '&#x2615';
  const spanFive = document.createElement('span');
  spanFive.textContent = ' by ';
  const anchor = document.createElement('a');
  anchor.setAttribute('href', 'https://github.com/arndzk');
  anchor.innerHTML = 'arndzk';

  div.appendChild(spanOne);
  div.appendChild(spanTwo);
  div.appendChild(spanThree);
  div.appendChild(spanFour);
  div.appendChild(spanFive);
  div.appendChild(anchor);

  targetElement.appendChild(div);
};

export default buildSignature;
