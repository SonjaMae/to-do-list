import makeElement from "../../utils/makeElement.js"

// path="../../pages/todolist.js"
const logo = function (label="ui logo", className="ui-logo"){
     const template = `<img src="./src/js/components/icons/bee.svg" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default logo