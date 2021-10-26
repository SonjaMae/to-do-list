import makeElement from "../../utils/makeElement.js"

const li = function (className="ui-li"){
     const template = `<li class="${className}"></li>`
     const element = makeElement(template)

     return element
}

export default li