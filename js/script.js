const addBtn = document.querySelector('.add-btn')
const addInput = document.querySelector('.add-input')
const listGroup = document.querySelector('.list-group')

let allTodos = JSON.parse(localStorage.getItem('todos')) || []
const drawItem = (itemText) =>{
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-lg-between','align-items-center')
    let checkBox = document.createElement('input')
    checkBox.classList.add('form-check-input')
    checkBox.type = 'checkbox'
    const span = document.createElement('span')
    span.textContent = itemText
    const btn = document.createElement('button')
    btn.classList.add('btn','btn-danger','sm-4', 'delete-btn')
    btn.textContent = 'Delete'
    li.appendChild(checkBox)
    li.appendChild(span)
    li.appendChild(btn)
    listGroup.appendChild(li)
    if(checkBox.value !== 'checked') {
        console.log( listGroup.appendChild(li))
    }else {
        console.log(span.style.textDecoration = 'line-through')
    }
}

const drawList = (array) => {
    listGroup.innerHTML = ''
    array.forEach((todo) => {
        drawItem(todo)
    })
    deleteItem()
}

drawList(allTodos)

const addNewItem = () => {
    if(addInput.value.trim() === '') {
        alert('Please enter list name')
        return
    }
    allTodos = [...allTodos,addInput.value]
    localStorage.setItem('todos',JSON.stringify(allTodos))
    addInput.value = ''
    drawList(allTodos)
}

addBtn.addEventListener('click', () => {
    addNewItem()
})



function deleteItem() {
    const deleteButtons = document.querySelectorAll('.delete-btn')
     deleteButtons.forEach((oneButton, btnIdx) => {
        oneButton.addEventListener('click', () => {
            allTodos = allTodos.filter((todosFromStorage, idxFromStorage) => btnIdx !== idxFromStorage)
            localStorage.setItem('todos', JSON.stringify(allTodos))
            drawList(allTodos)
        })
    })
}
addInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addNewItem()

    }
})






