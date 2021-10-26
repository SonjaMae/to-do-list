import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/delete.png"

const trash = function (label="Delete task", className="delete-icon"){
     const template = `<a href="#">
               <img src="${img}" class="${className}" alt="${label}" />
          </a>`
     const element = makeElement(template);

     return element
}

export default trash