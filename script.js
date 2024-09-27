 // Get the elements
 const addBtn = document.getElementById('addBtn');
 const todoInput = document.getElementById('todoInput');
 const todoList = document.getElementById('todoList');

 // Add event listener to the Add button
 addBtn.addEventListener('click', addTodo);

 // Function to add a new task
 function addTodo() {
     const todoText = todoInput.value.trim();

     // Check if the input is not empty
     if (todoText === '') {
         alert('Please enter a task');
         return;
     }

     // Create a new list item
     const li = document.createElement('li');
     
     // Create a span to hold the task text
     const span = document.createElement('span');
     span.classList.add('todo-text');
     span.textContent = todoText;

     // Create the Complete button
     const completeBtn = document.createElement('button');
     completeBtn.classList.add('complete-btn');
     completeBtn.textContent = 'Complete';
     completeBtn.addEventListener('click', completeTodo);

     // Create the Delete button
     const deleteBtn = document.createElement('button');
     deleteBtn.classList.add('delete-btn');
     deleteBtn.textContent = 'Delete';
     deleteBtn.addEventListener('click', deleteTodo);

     // Append the span and buttons to the list item
     li.appendChild(span);
     li.appendChild(completeBtn);
     li.appendChild(deleteBtn);

     // Append the list item to the unordered list
     todoList.appendChild(li);

     // Clear the input field
     todoInput.value = '';
 }

 // Function to mark a task as complete
 function completeTodo(e) {
     const todoText = e.target.parentNode.querySelector('.todo-text');
     todoText.classList.toggle('completed');
 }

 // Function to delete a task
 function deleteTodo(e) {
     const todoItem = e.target.parentNode;
     todoList.removeChild(todoItem);
 }