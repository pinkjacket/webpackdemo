import _ from "lodash";
import printMe from "./print.js";

function component() {
  var element = document.createElement('div');
  var btn = document.createElement("button");

  // Lodash, imported at top of file
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component(); //storing element to rerender when print.js changes
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); //re-render component to update click handler
    document.body.appendChild(element);
  })
}
