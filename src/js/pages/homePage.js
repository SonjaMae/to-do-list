import header from '../components/ui/header.js'
import logo from '../components/ui/logo.js'
import tagline from '../components/ui/tagline.js'
import link from '../components/ui/link.js'

const homePage = function (){

    const home = document.createElement('home')
    const h1 = header('Home Page', 'ui-header')
    const icon = logo('Busy Bee Task Manager logo', 'ui-logo')
    const tagLine = tagline('Busy Bee Task Manager', 'ui-header')
    const linkToApp = link('Manage Your Tasks', '/todolist.js')
    home.append(h1)
    home.append(icon)
    home.append(tagLine)
    home.append(linkToApp)

    return home
}

export default homePage