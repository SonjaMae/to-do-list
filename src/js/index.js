import Router from './router/router.js'
import homePage from './pages/homePage.js'
import toDoPage from './pages/toDoPage.js'
// import dataFetcher from './utils/dataFetcher.js'
// Router('/')
Router(window.location.pathname)
const app = document.querySelector('#app')

const onAppInit = async function() {
//     const data = await dataFetcher('./data/todos.json');
//     console.log(data)
//     const templateLiteral = userTemplate(data);
//     const elem = makeElement(templateLiteral);
//     //console.log(elem);
//     render(elem, document.querySelector('#app'));
}
window.addEventListener('load', onAppInit)

export {homePage}
export {toDoPage}