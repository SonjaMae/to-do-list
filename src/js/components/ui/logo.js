import makeElement from "../../utils/makeElement.js"
import img from "../icons/bee.png"

// path="../../pages/todolist.js"
const logo = function (label="ui logo", className="ui-logo"){
     // const template = `<img src="./src/js/components/icons/bee.png" class="${className}" alt="${label}" />`
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default logo