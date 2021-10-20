import homePage from "../pages/homePage.js";
import toDoPage from "../pages/toDoPage.js";

const routes = {
    '/':homePage(),
    '/taskManager':toDoPage()
}

const Router = function(pathname){
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])
}

export {routes}
export default Router