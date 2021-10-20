import makeElement from "../../utils/makeElement.js"

const div = function (className="ui-div"){
     const template = `<div class="${className}"></div>`
     const element = makeElement(template)

     return element
}

export default div