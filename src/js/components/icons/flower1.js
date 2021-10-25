import makeElement from "../../utils/makeElement.js"
import img from "../../../assets/flower1.png"

const flower1 = function (label="ui img", className="ui-img"){
     const template = `<img src="${img}" class="${className}" alt="${label}" />`
     const element = makeElement(template);

     return element
}

export default flower1