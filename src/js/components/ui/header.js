import makeElement from "../../utils/makeElement.js"

const header = function (title="ui header", className="ui-header"){
     const template = `<h1 class="${className}"> ${title} </h1>`
     const element = makeElement(template)

     return element
}

export default header