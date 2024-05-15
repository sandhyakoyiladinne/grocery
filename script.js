document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();

        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        const task = document.createElement('div');
        task.classList.add('task');

        const content = document.createElement('div');
        content.classList.add('content');
        
        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = taskText;
        taskInput.setAttribute("readonly", "readonly");

        content.appendChild(taskInput);
        task.appendChild(content);

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerHTML = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = "Delete";

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        task.appendChild(actions);

        list.appendChild(task);

        input.value = "";

        editBtn.addEventListener('click', () => {
            if (editBtn.innerText.toLowerCase() === "edit") {
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                editBtn.innerText = "Save";
            } else {
                taskInput.setAttribute("readonly", "readonly");
                editBtn.innerText = "Edit";
            }
        });

        deleteBtn.addEventListener("click", () => {
            list.removeChild(task);
        });
    });
});



