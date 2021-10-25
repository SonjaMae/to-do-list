import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/edit.png"

const edit = function (label="Edit task", className="edit-icon"){
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default edit