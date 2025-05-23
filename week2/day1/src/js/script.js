const appName = "Task Management App";
console.log('Welcome to the',appName,"!");

function logTask(task) {
  console.log(`${task.title} - ${task.completed ? 'Completed' : 'Incomplete'}`);
}

let tasks = []; // Array to store tasks

function renderTask(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  const icon = document.createElement('i');
  icon.className = task.completed ? 'fas fa-check-circle task-icon' : 'far fa-circle task-icon';
  li.appendChild(icon);
  li.appendChild(document.createTextNode(` ${task.title}`));
  taskList.appendChild(li);
}

for (const task of tasks) {
  logTask(task);
}

const taskList = document.getElementById('task-list');



tasks.forEach(renderTask);

// Select the form
const taskForm = document.getElementById('task-form');

// Add submit event listener
taskForm.addEventListener('submit', handleFormSubmit);

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Select the task title input
  const taskTitleInput = document.getElementById('task-title');
  const title = taskTitleInput.value.trim();

  // Check if the title is empty
  if (title === '') {
    // Append error message if invalid
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = 'Task title cannot be empty';
    taskForm.appendChild(errorDiv);
  } else {
    // Remove any existing error message if valid
    const existingError = taskForm.querySelector('.error');
    if (existingError) {
      existingError.remove();
    }
    // Create a new task object
    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      title: title,
      completed: false
    };

    // Add task to array and render it
    tasks.push(newTask);
    renderTask(newTask);

    // Clear the input field
    taskTitleInput.value = '';
  }
}


