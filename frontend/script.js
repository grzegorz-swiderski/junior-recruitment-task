var todoList = null;
var todoForm = null;


document.addEventListener('DOMContentLoaded', function() {
    todoList = document.querySelector('#todoList');
    todoForm = document.querySelector('#todoForm');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var textarea = this.querySelector('#todoMessage');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });
    
    function addTask(text) {
        
    //create todo's element
    var todo = document.createElement('div');
    todo.classList.add('todo-element');
    todo.classList.add('row');

    //create div with checkbox
    var todoCheckbox = document.createElement('div');
    todoCheckbox.classList.add('todo-element-checkbox');
        
    //create div with delete-button
    var todoDelete = document.createElement('div');
    todoDelete.classList.add('todo-element-delete');
        
    //create element with text
    var todoText = document.createElement('div');
    todoText.classList.add('todo-element-text');
    todoText.innerText = text;
        
    //create checkbox
    var todoCheckboxBtn = document.createElement('div');
    todoCheckboxBtn.innerHTML = '<input type="checkbox" class="mycheck">';

    //create delete button
    var todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.innerHTML = '<img src="assets/trash.png" alt="basket" id="basket">';
    
    //combine buttons with their div
    todoDelete.appendChild(todoDeleteBtn);
    todoCheckbox.appendChild(todoCheckboxBtn);

    //into a whole
    todo.appendChild(todoCheckbox);
    todo.appendChild(todoText);
    todo.appendChild(todoDelete);
    

    //combine todo elements with todoList
    todoList.append(todo);
    
    //delete todo element
    todoDeleteBtn.addEventListener('click', function(e) {
        e.target.closest('.todo-element').remove();
    });
    
    //create line throught text
    todoCheckboxBtn.addEventListener('click', function(){
      todoText.classList.toggle('line-throught');
      todoDeleteBtn.classList.toggle('filter-img');
    });
  }
});