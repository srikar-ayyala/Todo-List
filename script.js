let tasks = document.getElementById('tasks');
let addTaskName = document.getElementById('add-task-txt');
let taskCount = 0;

document.getElementById('add-task-button').addEventListener('click', AddTask);
document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        AddTask();
    }
})


function AddTask() {
    if(addTaskName.value == '') return;
    let newTask = `<li class="task" id="task${taskCount}"><p>`+addTaskName.value+`</p><button class="delete"><i class="fa-solid fa-xmark"></i></button></li>`;
    addTaskName.value = '';
    document.getElementById('tasks').insertAdjacentHTML("beforeend", newTask);


    document.getElementById(`task${taskCount}`).childNodes[0].addEventListener('click', (e) => {
        CheckTask(e.target.parentNode);
    })
    document.getElementById(`task${taskCount}`).childNodes[1].addEventListener('click', (e) => {
        DeleteTask(e.target.parentNode.parentNode)
    })

    taskCount++;
}

function DeleteTask(id) {
    id.remove();
}

function CheckTask(id) {
    id.remove();
    document.getElementById('completed-tasks').insertAdjacentHTML('beforeend', id.outerHTML);
    document.getElementById(id.id).childNodes[1].addEventListener('click', (e) => {
        console.log(2);
        DeleteTask(e.target.parentNode.parentNode)
    })
}

