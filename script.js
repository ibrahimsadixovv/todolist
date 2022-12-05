let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let todo_content_box = document.querySelector(".todo_content_box");

btn.onclick = () => {
    createTodoItem()
};
inp.onkeydown = (e) => {
    if (e.key == "Enter") {
        createTodoItem()
    }
    
    
    
};

function createTodoItem() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("todo_item");

    let contentDiv = document.createElement("div");
    contentDiv.classList.add("todo_item_content");
    contentDiv.innerHTML = inp.value;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("todo_item_delete");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = () => mainDiv.remove();

    let editButton = document.createElement("button");
    editButton.classList.add("todo_item_edit");
    editButton.innerHTML = "Edit";
    editButton.onclick = () => contentDiv.innerHTML=inp.value;

    mainDiv.append(contentDiv, deleteButton, editButton);
    todo_content_box.appendChild(mainDiv);
}
