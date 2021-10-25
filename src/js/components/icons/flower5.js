import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/flower5.png"

const flower5 = function (label="ui img", className="ui-img"){
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default flower5