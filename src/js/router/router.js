import homePage from "../pages/homePage.js";
import toDoPage from "../pages/toDoPage.js";
import notFound from "../pages/notFound.js";

const routes = {
    '/':homePage(),
    '/tasks':toDoPage()
}

const Router = function(pathname){
    const isValidRoute = Object.keys(routes).find(key=>key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if (isValidRoute === undefined) {
        app.append(notFound())
    } else {
        app.appendChild(routes[window.location.pathname])
    }
}

export {routes}
export default Router