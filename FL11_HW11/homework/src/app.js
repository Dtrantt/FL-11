function ToDoList() {
    let countId = 0;
    let countItem = 0;
    const maxItem = 9;

    const checkText = () => {
        if (newTask.value) {
            activeTaskBtn();
        } else {
            disabledTaskBtn();
        }
    }

     const activeTaskBtn = () => {
        newTaskBtn.classList.add('active');
        newTaskBtn.removeAttribute('disabled', 'disabled');
    }

    const disabledTaskBtn = () => {
        newTaskBtn.classList.remove('active');
        newTaskBtn.setAttribute('disabled', 'disabled');
    }

    const addTask = () => {
        const newItem = document.createElement('li');
        newItem.innerHTML =
                                `<i class="material-icons task_done_icon hidden">done</i> 
                                <input type="checkbox" class="task_done">
                                <span class="text_task">${newTask.value}</span>
                                <input type="text" class="input_edit hidden">
                                <i class="material-icons edit_icon">edit</i>
                                <i class="material-icons hidden save_icon">save</i>
                                <i class="material-icons delete_icon">delete</i>`;

        toDoList.appendChild(newItem);
        newItem.id = `list_item_${countId}`;
        newItem.classList.add('list_item');
        newItem.setAttribute('draggable', true);

        let editIcon = newItem.querySelector(`.edit_icon`);
        let saveIcon = newItem.querySelector(`.save_icon`);
        let taskDone = newItem.querySelector(`.task_done`);
        let deleteIcon = newItem.querySelector(`.delete_icon`);

        editIcon.addEventListener('click', edit);
        saveIcon.addEventListener('click', save);
        taskDone.addEventListener('click', markedTask);
        deleteIcon.addEventListener('click', deleteTask);

        newTask.value = '';
        countId++;
        countItem++;
        disabledTaskBtn();

        if(countItem > maxItem){
            errorText.classList.remove('visibility_hidden');
            newTask.setAttribute('disabled', 'disabled');
        }
    }

    const markedTask = (e) => {
        const parentId = e.target.parentElement.id;
        const taskDoneIcon = document.querySelector(`#${parentId} .task_done_icon`);
        const taskDone = document.querySelector(`#${parentId} .task_done`);
        const editIcon = document.querySelector(`#${parentId} .edit_icon`);

        taskDoneIcon.classList.remove('hidden');
        taskDone.classList.add('hidden');
        editIcon.classList.add('hidden');
    }

    const deleteTask = (e) => {
        e.target.parentElement.remove();
        countItem--;
        errorText.classList.add('visibility_hidden');
        newTask.removeAttribute('disabled', 'disabled');
    }

    const edit = (e) => {
        const parentId = e.target.parentElement.id;
        const editIcon = document.querySelector(`#${parentId} .edit_icon`);
        const saveIcon = document.querySelector(`#${parentId} .save_icon`);
        const textTask = document.querySelector(`#${parentId} .text_task`);
        const inputEdit = document.querySelector(`#${parentId} .input_edit`);

        editIcon.classList.add('hidden');
        textTask.classList.add('hidden');
        saveIcon.classList.remove('hidden');
        inputEdit.classList.remove('hidden');
        inputEdit.value = textTask.innerHTML;
    }

    const save = (e) => {
        const parentId = e.target.parentElement.id;
        const editIcon = document.querySelector(`#${parentId} .edit_icon`);
        const saveIcon = document.querySelector(`#${parentId} .save_icon`);
        const textTask = document.querySelector(`#${parentId} .text_task`);
        const inputEdit = document.querySelector(`#${parentId} .input_edit`);

        editIcon.classList.remove('hidden');
        textTask.classList.remove('hidden');
        saveIcon.classList.add('hidden');
        inputEdit.classList.add('hidden');
        textTask.innerHTML = inputEdit.value;
    }

    const newTask = document.querySelector('#new_task');
    const newTaskBtn = document.querySelector('#task_btn');
    const toDoList = document.querySelector('#task');
    const errorText = document.querySelector('#error');

    newTask.addEventListener('input', checkText);
    newTaskBtn.addEventListener('click', addTask);
}

const toDoList = new ToDoList();