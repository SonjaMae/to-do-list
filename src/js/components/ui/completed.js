import makeElement from "../../utils/makeElement.js"

const completed = function (label="is completed", path="../../pages/todolist.js", className="is-completed"){
     const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`



     const element =  makeElement(template)

     return element
}

export default completed