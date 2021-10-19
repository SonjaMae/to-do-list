import makeElement from "../../utils/makeElement.js"

const tagline = function (tagline="ui tagline", className="ui-tagline"){
     const template = `<p class="${className}"> ${tagline} </p>`
     const element = makeElement(template)

     return element
}

export default tagline