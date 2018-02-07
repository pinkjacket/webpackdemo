import _ from "lodash";
import "./style.css";

function component() {
  var element = document.createElement('div');

  // Lodash, now imported at top of file
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
