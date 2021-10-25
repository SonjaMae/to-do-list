import makeElement from "../../utils/makeElement.js"

const p = function (label="ui p", className="ui-p"){
     const template = `<p class="${className}"> ${label} </p>`
     const element = makeElement(template)

     return element
}

export default p