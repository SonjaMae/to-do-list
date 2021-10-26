import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/add.png"

const add = function (label="Add task", className="add-icon"){
     const template = `<a href="#">
               <img src="${img}" class="${className}" alt="${label}" />
               <span>Add New Task</span>
          </a>`
     const element = makeElement(template);

     return element
}

export default add