import _ from "lodash";

function component() {
  var element = document.createElement('div');

  // Lodash, now imported at top of file
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
