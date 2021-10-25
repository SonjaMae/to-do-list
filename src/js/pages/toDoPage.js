import header from '../components/ui/header.js'
import logo from '../components/ui/logo.js'
import tagline from '../components/ui/tagline.js'
import div from '../components/ui/div.js'
import ul from '../components/ui/ul.js'
import li from '../components/ui/li.js'
import flower1 from '../components/ui/flower1.js'
import flower2 from '../components/ui/flower2.js'
import flower3 from '../components/ui/flower3.js'
import flower4 from '../components/ui/flower4.js'
import flower5 from '../components/ui/flower5.js'
import header2 from '../components/ui/header2.js'
import duedate from '../components/ui/duedate.js'
import completed from '../components/ui/completed.js'
import edit from '../components/ui/edit.js'
import trash from '../components/ui/trash.js'
import add from '../components/ui/add.js'
import p from '../components/ui/p.js'


const toDoPage = function (){
    const manager = document.createElement('manager')
    const managerHead = div('manager-head')
    const managerBody = div('manager-body')
    const managerFoot = div('manager-foot')
    //head
    const h1 = header('Busy Bee', 'td-header')
    const icon = logo('logo', 'td-logo')
    const tagLine = tagline('Task Manager', 'td-tagline')
    managerHead.append(h1)
    managerHead.append(icon)
    managerHead.append(tagLine)
    //to do structure
    const todolist = ul('td')
    const liHome = li('home-li')
    const liSchool = li('school-li')
    const liHealth = li('health-li')
    const liFriends = li('friends-li')
    const liWork = li('work-li')
    todolist.append(liHome)
    todolist.append(liSchool)
    todolist.append(liHealth)
    todolist.append(liFriends)
    todolist.append(liWork)
    //to do icons
    const iconHome = flower1('Home icon', 'home-icon')
    const iconSchool = flower2('School icon', 'school-icon')
    const iconHealth = flower3('Health icon', 'health-icon')
    const iconFriends = flower4('Friends icon', 'friends-icon')
    const iconWork = flower5('Work icon', 'work-icon')
    liHome.append(iconHome)
    liSchool.append(iconSchool)
    liHealth.append(iconHealth)
    liFriends.append(iconFriends)
    liWork.append(iconWork)
    //to do info div
    const divHome = div('home-div')
    const divSchool = div('school-div')
    const divHealth = div('health-div')
    const divFriends = div('friends-div')
    const divWork = div('work-div')
    //
    const h2Home = header2('Home', 'home-h2')
    const h2School = header2('School', 'school-h2')
    const h2Health = header2('Health', 'health-h2')
    const h2Friends = header2('Friends', 'friends-h2')
    const h2Work = header2('Work', 'work-h2')
    divHome.append(h2Home)
    divSchool.append(h2School)
    divHealth.append(h2Health)
    divFriends.append(h2Friends)
    divWork.append(h2Work)
    //
    const dueHome = duedate('Home', 'home-due')
    const dueSchool = duedate('School', 'school-due')
    const dueHealth = duedate('Health', 'health-due')
    const dueFriends = duedate('Friends', 'friends-due')
    const dueWork = duedate('Work', 'work-due')
    divHome.append(dueHome)
    divSchool.append(dueSchool)
    divHealth.append(dueHealth)
    divFriends.append(dueFriends)
    divWork.append(dueWork)
    //


    

    //put divs on their li
    liHome.append(divHome)
    liSchool.append(divSchool)
    liHealth.append(divHealth)
    liFriends.append(divFriends)
    liWork.append(divWork)
    //edit icon
    const iconEdit1 = edit('Edit task', 'edit-icon')
    const iconEdit2 = edit('Edit task', 'edit-icon')
    const iconEdit3 = edit('Edit task', 'edit-icon')
    const iconEdit4 = edit('Edit task', 'edit-icon')
    const iconEdit5 = edit('Edit task', 'edit-icon')
    liHome.append(iconEdit1)
    liSchool.append(iconEdit2)
    liHealth.append(iconEdit3)
    liFriends.append(iconEdit4)
    liWork.append(iconEdit5)
    //delete icon
    const iconDelete1 = trash('Delete task', 'delete-icon')
    const iconDelete2 = trash('Delete task', 'delete-icon')
    const iconDelete3 = trash('Delete task', 'delete-icon')
    const iconDelete4 = trash('Delete task', 'delete-icon')
    const iconDelete5 = trash('Delete task', 'delete-icon')
    liHome.append(iconDelete1)
    liSchool.append(iconDelete2)
    liHealth.append(iconDelete3)
    liFriends.append(iconDelete4)
    liWork.append(iconDelete5)
    //put lis on the body
    managerBody.append(liHome)
    managerBody.append(liSchool)
    managerBody.append(liHealth)
    managerBody.append(liFriends)
    managerBody.append(liWork)

    //footer
    const addTaskIcon = add('Add task', 'add-icon')
    const addTaskText = p('Add New Task', 'add-text')
    managerFoot.append(addTaskIcon)
    managerFoot.append(addTaskText)

    manager.append(managerHead)
    manager.append(managerBody)
    manager.append(managerFoot)

    return manager
}

export default toDoPage