
let tasks = [
];

const addTask = () => {
    const title = document.getElementById("task-title").value;
    const status = document.getElementById("task-status").value;
    const priority = parseInt(document.getElementById("task-priority").value);

    if (title && status && priority >= 1 && priority <= 5) {
        tasks.push({ title, status, priority });
        document.getElementById("task-title").value = '';
        document.getElementById("task-priority").value = '';
        updateTaskList(); 
    } else {
        alert("Please provide valid task details.");
    }
};

const filterTasks = (status) => {
    const filteredTasks = tasks.filter(task => task.status === status);
    displayTasks(filteredTasks);
};


const clearFilters = () => {
    displayTasks(tasks);
};


const displayTasks = (taskList) => {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = ''; 
    taskList.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.classList.add(task.status.toLowerCase());
        taskElement.innerText = `${task.title} (Priority: ${task.priority})`;
        taskListElement.appendChild(taskElement);
    });
};


const updateTaskList = () => {
    displayTasks(tasks);
};

updateTaskList();
