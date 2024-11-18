// Get elements
const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    // Add event listener to delete button
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    // Append delete button to list item
    listItem.appendChild(deleteBtn);

    // Append list item to the list
    todoList.appendChild(listItem);

    // Clear input field
    todoInput.value = '';
}

// Event listener for add button
addBtn.addEventListener('click', addTask);

// Event listener for pressing 'Enter' key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

