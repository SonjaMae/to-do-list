import makeElement from "../../utils/makeElement.js"
import id from '../../components/ui/id.js'

const li = function (className="ui-li"){
     const template = `<li class="${className}" data-key="${id}""></li>`
     const element = makeElement(template)

     return element
}

export default li