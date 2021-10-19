import makeElement from "../../utils/makeElement.js";

const logo = function (label="ui logo", className="ui-logo"){
     const template = `<img src="./icons/bee.svg" class="${className}" alt="${label}">`
     const element = makeElement(template);

     return element
}

export default logo