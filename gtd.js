// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
// Remove task event from link
taskList.addEventListener('click', removeTask);
// Remove all tasks at one From One Clcik
clearBtn.addEventListener('click', clearTask)
// Filter task Or Find Task Here
filter.addEventListener('keyup', filterTasks)
}
// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-check" style="font-size:20px;color:red;"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store Tasks in Local Storage

  storeTaskInLocalStorage();

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// store task to local storage

function storeTaskInLocalStorage(task) {
  let tasks;
  
}

// Removing Ul from font awesome Link element 

function removeTask(e) {
  if (e.target.parentElement.classList.contains ('delete-item')) {
    if(confirm('Have You completed This Task')) {
    e.target.parentElement.parentElement.remove();
  }}
}

// Removing all tasks at once from clear things 

function clearTask() {
  // taskList.innerHTML = '';  // Method 1 

while (taskList.firstChild) {
  taskList.removeChild(taskList.firstChild);
} // Method 2 is Faster (Recommended)
}

// Filter Tasks Function from forEach

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(
  function(task){
    const item = task.firstChild.textContent; 
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })}


  // Set the Local Storage



  
