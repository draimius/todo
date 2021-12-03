'use strict'
class ToDoList {
    constructor(taskInput) {
        this.taskInput = taskInput
        this.popUp()
    }
    popUp() {
        this.taskInput.classList.toggle('show')
    }
    capture(keystroke) { //capture text in input
        if (keystroke.key == 'Enter') {
            this.tsk = taskInput.value
            taskInput.value = ''
            this.append()
        }
    }
    append() {
        let item = document.createElement('p')
        let trash = document.createElement('section')
        let container = document.createElement('article')
        let regex = /([\w])/g
        item.innerText = this.tsk;
        trash.innerText = '🗑'
        if (this.tsk.match(regex) !== null) {
            container.appendChild(trash)
            container.appendChild(item)
            list.appendChild(container)
        }
    }
    strike(event) {
        let targetP = event.target
        if (event.target.parentNode.innerHTML.includes('</p>') == true && event.target !== list) {
            targetP.classList.toggle('strike')
        }
    }
    hover(event) {
        this.targetSection = event.target.parentNode.children[0]
        if (event.target.parentNode.innerHTML.includes('</p>') == true && event.target !== list) {
            this.targetSection.classList.toggle('delete')
        }
    }
    delete(event) {
        if (event.target == this.targetSection && event.target !== list) {
            list.removeChild(event.target.parentNode), 1000
        }
    }
}

// variable to access element 
const addButton = document.querySelector('[data-addToDo]')
const taskInput = document.querySelector('[data-task]')
const list = document.querySelector('[data-list]')

// create to utilize functions withing class constructor
const toDoList = new ToDoList(taskInput)


// events and triggers for functinallity
addButton.addEventListener('click', () => {
    toDoList.popUp()
})
taskInput.addEventListener('keypress', (keystroke) => {
    toDoList.capture(keystroke)
})

list.addEventListener('mouseover', (event) => {
    toDoList.hover(event)
})
list.addEventListener('mouseout', (event) => {
    toDoList.hover(event)
})
list.addEventListener('click', (event) => {
    toDoList.strike(event)
})

list.addEventListener('click', (event) => {
    toDoList.delete(event)
})




// id like to add a shift and fade effect to item when deleted
// like to limit list to 5 item - alert to complete or delete to add new item
// like to add ability to grab and move the item change there order
// like to give ability to edit item in list after already been submitted
// like the ability to name the list 
// like the ability to have multiple list
// (basically build it to be a trello of sort lease the board interface)
