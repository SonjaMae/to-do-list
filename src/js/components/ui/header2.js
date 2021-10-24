import makeElement from "../../utils/makeElement.js"

const header = function (title="ui header", className="ui-header"){
     const template = `<h2 class="${className}"> ${title} </h2>`
     const element = makeElement(template)

     return element
}

export default header