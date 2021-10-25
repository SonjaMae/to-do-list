import makeElement from "../../utils/makeElement.js"
import isComplete from "../../../data/todos.json"

const completed = function (className="is-completed"){
     let completeStatus = JSON.parse(isComplete)

     if (completeStatus == true) {
          completeStatus = "Completed"
     } else {
          completeStatus = ""
     }

     const template = `<p class="${className}>Completed</p>`
     const element =  makeElement(template)

     return element
}

export default completed