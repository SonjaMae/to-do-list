import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/edit.png"

const edit = function (label="Edit task", className="edit-icon"){
     const template = `<a href="#">
               <img src="${img}" class="${className}" alt="${label}" />
          </a>`
     const element = makeElement(template);

     return element
}

export default edit