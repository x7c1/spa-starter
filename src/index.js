import _ from 'lodash';
import './style.css';

const createElement = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ', ');
  return element;
};

const render = () => {
  const element = createElement();
  document.body.appendChild(element);
};

render();
