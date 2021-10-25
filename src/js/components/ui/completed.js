import makeElement from "../../utils/makeElement.js"
import isComplete from "../../../data/todos.json"

const completed = function (className="is-completed"){
     let completeStatus = isComplete.toString()

     // if (isComplete == true) {
     //      completeStatus = "Completed"
     // } else {
     //      completeStatus = "Incomplete"
     // }

     const template = `<p class="${className}>${completeStatus}</p>`
     const element =  makeElement(template)

     return element
}

export default completed