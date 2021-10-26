import makeElement from "../../utils/makeElement.js"
import data from "../../../data/todos.json"
// import keyGenerator from "../../utils/keys.js"

const id = function (){
    let identifier = data[0].id.toString()
    const template = `data-key="${identifier}""`
    const element =  makeElement(template)
    return element
}

export default id