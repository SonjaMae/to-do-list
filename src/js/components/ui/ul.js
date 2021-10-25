import makeElement from "../../utils/makeElement.js"

const ul = function (className="ui-ul"){
     const template = `<ul class="${className}"></ul>`
     const element = makeElement(template)

     return element
}

export default ul