import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";

function component() {
  var element = document.createElement('div');

  // Lodash, now imported at top of file
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  // Add image to the existing div
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
