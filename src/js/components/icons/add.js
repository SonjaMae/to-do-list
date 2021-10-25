import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/add.png"

const add = function (label="Add task", className="add-icon"){
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default add