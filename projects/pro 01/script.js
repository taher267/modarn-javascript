let form = document.querySelector('form#task_form');
let taskUL = document.querySelector('ul.list-unstyled');
let taskVal= document.querySelector('form #enterTask');
let clearTask= document.querySelector('#clearTask');
let FiltTask = document.querySelector('#filterTask');
form.addEventListener('submit', addTask);
//Remove Task
taskUL.addEventListener('click', removeTask);

clearTask.addEventListener('click', clearAllTask);

FiltTask.addEventListener('keyup', filterlist);
document.addEventListener('DOMContentLoaded', getTasks);

function addTask(e) {   
    if (taskVal.value =='') {
     alert('Fill the task Field')   ;
    }else{
        let LI = document.createElement('li');
        let ullink = document.createElement('a');
        ullink.innerHTML='x';
        ullink.setAttribute('href', '#');
        LI.appendChild(document.createTextNode(taskVal.value+' '));
        LI.appendChild(ullink);
        taskUL.appendChild(LI);
        storeTaskInLocalStorage(taskVal.value);
        taskVal.value ='';
    }
    e.preventDefault();
}

//Remove task
function removeTask(e) {
    if (e.target.hasAttribute('href') && confirm('Are you Sure?')) {
        let ele = e.target.parentElement;
        ele.remove();
        taskListFromLocalStore(ele);
    }
   
    e.preventDefault();
}

function clearAllTask(e) {
    // taskUL.innerHTML='';
    while(taskUL.firstChild){taskUL.removeChild(taskUL.firstChild)}
}

function filterlist(e) {

    
    let txt = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach( task => {
        
        let item = task.firstChild.textContent;
        // console.log(item.toLowerCase().indexOf(txt));
        if (item.toLowerCase().indexOf(txt) != -1) {
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}
//Storage Data in Local Store
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//get Data form Storage

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let LI = document.createElement('li');
        let ullink = document.createElement('a');
        ullink.innerHTML='x';
        ullink.setAttribute('href', '#');
        LI.appendChild(document.createTextNode(task+' '));
        LI.appendChild(ullink);
        taskUL.appendChild(LI);
    });
}
//remoe task form Local Storage
function taskListFromLocalStore(taskItem) {
    // console.log(taskItem.textContent);
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild);
    tasks.forEach((task, inx)=>{
        if (li.textContent.trim() === task) {
            tasks.splice(inx,1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}