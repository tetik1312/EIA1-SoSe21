var anzahlTodos = 0;
function updateAnzahl() {
    document.getElementById("anzahl").innerText = anzahlTodos + " ToDo's";
}
//keypress
var todoText = document.querySelector("#todo");
todoText.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        createTodo();
        todoText.value = "";
    }
});
//todo erstellen
function createTodo() {
    var newTodo = document.createElement("div");
    newTodo.className = "newTodo";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var label = document.createElement("label");
    label.className = "todotext";
    label.innerHTML = todoText.value;
    var trash = document.createElement("i");
    trash.className = "fas fa-trash-alt pointer";
    document.getElementById("taskArray").appendChild(newTodo);
    newTodo.appendChild(checkbox);
    newTodo.appendChild(label);
    newTodo.appendChild(trash);
    trash.addEventListener("click", function () {
        deleteTask(newTodo);
    });
    anzahlTodos++;
    updateAnzahl();
    // checkbox.addEventListener("click", function(): void {
    //     deleteTask(newTodo);
    // });
}
function deleteTask(newTodo) {
    newTodo.remove();
    anzahlTodos--;
    updateAnzahl();
}
//# sourceMappingURL=todo.js.map