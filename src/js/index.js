import Router from './router/router.js'
import homePage from './pages/homePage.js'
import toDoPage from './pages/toDoPage.js'
// import dataFetcher from './utils/dataFetcher.js'

Router('/')
// Router (window.location.pathname)

const app = document.querySelector('#app')

// const appInit = async function(){
//     const data = await dataFetcher('./data/todos.json');
//     console.log(data)

//     const templateLiteral = userTemplate(data);
//     const elem = makeElement(templateLiteral);
//     //console.log(elem);

//     render(elem, document.querySelector('#app'));
// }

// appInit()
// window.addEventListener('load', appInit)

export {homePage}
export {toDoPage}