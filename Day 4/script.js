function addTask() {

let Li =document.getElementById('lists');
const list = document.createElement('p');
let Task = document.getElementById('input').value;

    if (Task === '') {
        alert('You are yet to enter a task!')
     } else {
    Li.appendChild(list).innerHTML=`<li> ${Task} 
      <button id="dispose"> X </button>`;

    saveTodos(Task);
    document.getElementById('input').value = '';

    list.addEventListener('click', function () {
    Li.removeChild(list);
    removeTodos(Task);
    })
         } 
}

 function saveTodos(Todo){
     let todos;
     if (localStorage.getItem('todos') === null) {
             todos = [];
         } else {
             todos = JSON.parse(localStorage.getItem('todos'));
         }
         todos.push(Todo);
         localStorage.setItem('todos', JSON.stringify(todos)); 
     }
     
function removeTodos(Todo) {
         let todos;
         if (localStorage.getItem('todos')=== null) {
             todos = [];
         } else {
             todos = JSON.parse(localStorage.getItem('todos'));  
     todos.splice(todos.indexOf(Todo), 1) 
     localStorage.setItem('todos', JSON.stringify(todos));           }
}
     

    //  On reload, tasks remain on the page.
function Tasks() {
         let todos;
         if (localStorage.getItem('todos') === null) {
             todos = [];
         } else {
             todos = JSON.parse(localStorage.getItem('todos'));
           
                    todos.forEach(function(todo){
                        let Li =document.getElementById('lists');
                        let Task = todo;
                        let list = document.createElement('p');
                        Li.appendChild(list).innerHTML=` <li> ${Task}  
                        <button id="dispose"> X </button>`; 
                        
                        list.addEventListener('click', function () {
                        Li.removeChild(list);
                        removeTodos(Task)
                         })
                }

        )} 
}
     Tasks();