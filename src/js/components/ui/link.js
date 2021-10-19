import makeElement from "../../utils/makeElement.js"
import Router from "../../router/router.js"

const onRequestNewPage = function(e){
     e.preventDefault()
     Router(e.currentTarget.dataset.path)
     return false
}

const link = function (label="ui link", path="../../pages/todolist.js", className="ui-link"){
     const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`
     const element =  makeElement(template)
     element.addEventListener('click', onRequestNewPage)

     return element
}

export default link