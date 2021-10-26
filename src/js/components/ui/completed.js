import makeElement from "../../utils/makeElement.js"
import data from "../../../data/todos.json"

const completed = function (className="is-completed"){
     let completeStatus = data[0].isComplete.toString()

     if (completeStatus == "true") {
          completeStatus = "Completed"
     } else {
          completeStatus = "Incomplete"
     }

     const template = `<p class="${className}">${completeStatus}</p>`
     const element =  makeElement(template)

     return element
}

export default completed