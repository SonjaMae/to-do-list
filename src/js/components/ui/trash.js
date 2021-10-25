import makeElement from "../../utils/makeElement.js"
import img from "../icons/delete.png"

const trash = function (label="Delete task", className="delete-icon"){
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default trash