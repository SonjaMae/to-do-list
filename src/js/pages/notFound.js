import makeElement from "../utils/makeElement.js"
import link from "../components/ui/link.js"
import img from "../../assets/bee.png"

const notFound = function() {
    const page = document.createElement('div')
    const backToSafety = link("Back to Safety", '/tasks')
    const template = `
        <header class="ui-header">
            <h1>Error 404</h1>
            <img src="${img}" class="ui-logo" alt="ui logo" />
            <p class="ui-tagline">That page doesn't exist.</p>
        </header>
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(backToSafety)
    page.append(pageHeader)

    return page
}

export default notFound