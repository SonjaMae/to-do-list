import homePage from "./../pages/homePage.js";

const routes = {
    '/':homePage()
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