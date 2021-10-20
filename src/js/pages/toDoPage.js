import header from '../components/ui/header.js'
import logo from '../components/ui/logo.js'
import tagline from '../components/ui/tagline.js'
// import link from '../components/ui/link.js'

const toDoPage = function (){

    const manager = document.createElement('manager')
    const h1 = header('Busy Bee', 'ui-header')
    const icon = logo('Busy Bee Task Manager logo', 'ui-logo')
    const tagLine = tagline('A Vanilla JS Task Manager', 'ui-header')
    // const linkToApp = link('Manage Your Tasks', '/toDoPage.js')
    manager.append(h1)
    manager.append(icon)
    manager.append(tagLine)
    // manager.append(linkToApp)

    return manager
}

export default toDoPage