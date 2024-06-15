var names = document.getElementById('name')
var description = document.getElementById('description')
var addbutton = document.getElementById('addButton')
var priority = document.getElementById('level')
var taskDiv = document.getElementById('taskDiv')


var taskList = []
const testeButton = () => {
    if (names.value != '' && description.value != '') {
        addbutton.style.visibility = 'visible'
    }
    else {
        addbutton.style.visibility = 'collapse'
    }
}
const add = () => {
    let task = {
        taskId: taskList.length + 1,
        taskName: names.value,
        taskpriority: priority.value,
        state: 'on going',
        taskDescription: description.value,
        deleted: false
    }
    //alert(priority.value)
    taskList.push(task)
    afficherTask()
}
const afficherTask = () => {
    taskDiv.innerHTML = []
    for (let index = 0; index < taskList.length; index++) {
        if (!taskList[index].deleted) {
            taskDiv.innerHTML += `<div class="mipotra"><span class="listTaskId">` + (parseInt(index) + 1) + `</span>` + `<span class="listTaskName">` + taskList[index].taskName + `</span>` + `<span class="listTaskPriority">` + taskList[index].taskpriority + `</span>` + `<span class="listTaskState">` + taskList[index].state + `</span>` + `<span class="listTaskDescription">` + taskList[index].taskDescription + `
        </span><span class="boiteButton">
        <button class="delButton" onclick="changeState(` + taskList[index].taskId + `)">state</button>
            <button class="ChangeButton" onclick="del(` + taskList[index].taskId + `)">del</button></span>
        </div>`
        } else {
            taskDiv.innerHTML += `<div class="invisible"><
        </div>`
        }
    }
}
const changeState = (id) => {
    //alert(id)
    if (taskList[id - 1].state == 'on going') {
        taskList[id - 1].state = 'Achieved'
        afficherTask()
    }
}
const del = (id) => {
    //alert(id)

    taskList[id-1].deleted = true
    afficherTask()
}
const delall = () => {
    taskList = []
    afficherTask()
}