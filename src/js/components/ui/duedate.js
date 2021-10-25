import makeElement from "../../utils/makeElement.js"

const duedate = function (className="due-date"){
     const date = "Thursday, December 22nd"
     const template = `<p class="${className}">Due on ${date}</p>`
     const element = makeElement(template)

     return element
}

export default duedate