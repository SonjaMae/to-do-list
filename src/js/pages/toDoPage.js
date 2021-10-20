import header from '../components/ui/header.js'
import logo from '../components/ui/logo.js'
import tagline from '../components/ui/tagline.js'
import div from '../components/ui/div.js'
import header2 from '../components/ui/header2.js'


const toDoPage = function (){

    const manager = document.createElement('manager')
    // const managerHead = document.createElement('managerHead')
    // const managerBody = document.createElement('managerBody')
    const managerHead = div('manager-head')
    const managerBody = div('manager-body')

    const h1 = header('Busy Bee', 'td-header')
    const icon = logo('Busy Bee Task Manager logo', 'td-logo')
    const tagLine = tagline('Task Manager', 'td-tagline')
    managerHead.append(h1)
    managerHead.append(icon)
    managerHead.append(tagLine)

    const h2Home = header2('Home', 'home')
    const h2School = header2('School', 'school')
    const h2Health = header2('Health', 'health')
    const h2Friends = header2('Friends', 'friends')
    const h2Work = header2('Work', 'work')
    
    managerBody.append(h2Home)
    managerBody.append(h2School)
    managerBody.append(h2Health)
    managerBody.append(h2Friends)
    managerBody.append(h2Work)


    manager.append(managerHead)
    manager.append(managerBody)

    return manager
}

export default toDoPage