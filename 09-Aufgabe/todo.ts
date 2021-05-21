let anzahlTodos: number = 0;

function updateAnzahl(): void {
    document.getElementById("anzahl").innerText = anzahlTodos + "ToDo";
}


//keypress
let todoText: HTMLInputElement = document.querySelector("#todo") as HTMLInputElement;

todoText.addEventListener("keydown", function(event: KeyboardEvent): void {
    if (event.key == "Enter") {
        createTodo();
        todoText.value = "";
    }
});

//todo erstellen
function createTodo (): void {
    let newTodo: HTMLDivElement = document.createElement("div");
    newTodo.className = "newTodo";
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    let label: HTMLLabelElement = document.createElement("label");
    label.className = "todotext";
    label.innerHTML = todoText.value;
    let trash: HTMLElement = document.createElement("i");
    trash.className = "fas fa-trash-alt pointer";

    document.getElementById("taskArray").appendChild(newTodo);
    newTodo.appendChild(checkbox);
    newTodo.appendChild(label);
    newTodo.appendChild(trash);

    trash.addEventListener("click", function(): void {
        deleteTask(newTodo);
    });

    anzahlTodos++;
    updateAnzahl();

    checkbox.addEventListener("click", function(): void {
        deleteTask(newTodo);
    });
}

function deleteTask(newTodo: HTMLDivElement): void {
    newTodo.remove();
    anzahlTodos--;
    updateAnzahl();
}
