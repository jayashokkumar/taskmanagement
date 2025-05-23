const appName = "Task Management App";
console.log("Welcome to the ${appName}!");

function logTask(task) {
  console.log(`${task.title} - ${task.completed ? 'Completed' : 'Incomplete'}`);
}

const tasks = [
  { id: 1, title: "Learn JavaScript", completed: true },
  { id: 2, title: "Build an app", completed: false },
  { id: 3, title: "Test the app", completed: false }
];

for (const task of tasks) {
  logTask(task);
}

const taskList = document.getElementById('task-list');


function renderTask(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  const icon = document.createElement('i');
  icon.className = task.completed ? 'fas fa-check-circle task-icon' : 'far fa-circle task-icon';
  li.appendChild(icon);
  li.appendChild(document.createTextNode(` ${task.title}`));
  taskList.appendChild(li);
}

tasks.forEach(renderTask);
