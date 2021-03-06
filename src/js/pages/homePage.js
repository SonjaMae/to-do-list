import header from '../components/ui/header.js'
import logo from '../components/icons/logo.js'
import tagline from '../components/ui/tagline.js'
import link from '../components/ui/link.js'

const homePage = function (){

    const home = document.createElement('home')
    const h1 = header('Busy Bee', 'ui-header')
    const tagLine = tagline('Vanilla JavaScript Task Manager', 'ui-tagline')
    const icon = logo('logo', 'ui-logo')
    const linkToApp = link('Manage Your Tasks', '/tasks')
    home.append(h1)
    home.append(tagLine)
    home.append(icon)
    home.append(linkToApp)

    return home
}

export default homePage