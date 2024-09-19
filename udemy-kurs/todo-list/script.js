

//eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
// const items = ["todo 1", "todo 2", "todo 3", "todo 4"]; //bu kısım direkt olarak diziden todo elemanlarını aktarmak için kullanılıyor.
let todos;

loadItem();
eventListener();

function loadItem(){
    todos=getItemsFromLS();
    todos.forEach(function(item){
        AddItem(item);
    })
    // items.forEach(function(item){
    //     AddItem(item);
    // })
}

function getItemsFromLS(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function setITemToLS(newTodo){
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function eventListener(){
    form.addEventListener("submit",addNewItem);
    taskList.addEventListener("click",DeleteItem);
    btnDeleteAll.addEventListener("click",DeleteAll);
}


function AddItem(newTodo){
    //li oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));
    
    //a oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';
    
    li.appendChild(a);
    
    taskList.appendChild(li);
}
//eleman ekleme

function addNewItem(e){
    if(input.value === ''){
        alert("Boş not eklenemez!")
    }
    
    AddItem(input.value);
    setITemToLS(input.value);

    input.value = "";

    e.preventDefault();
}

//element silme
function DeleteItem(e){
    if(e.target.className === "fas fa-times"){
        if(confirm("Silmek istediğinize emin misiniz?")===true){
            e.target.parentElement.parentElement.remove();
            deleteToDoFromStorage(e.target.parentElement.parentElement.textContent);
        }else{
            console.log("Silmekten vazgeçildi.");
        }
    }
    e.preventDefault();
}

//tüm elemanları sil
function DeleteAll(e){
    if(confirm("Tüm elemanları silmek istediğinize emin misiniz?") === true){
        // taskList.childNodes.forEach(function(item){
        //     if(item.nodeType===1){
        //         item.remove();
        //     }
        // });

        //kolay yol ile
        // taskList.innerHTML= "";

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
}


function deleteToDoFromStorage(deletetodo){
    let todos = getItemsFromLS();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}