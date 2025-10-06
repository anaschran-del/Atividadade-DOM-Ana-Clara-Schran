// Seletores do DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('tskInput');
const taskList = document.getElementById('taskList');

// Função que cria um <li> com texto e botão "Remover";
function createTaskItem(text) {
    const li = document.createElement('li');
    const span = document.careateElement('span');
    span.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eremover';
    deleteBtn.className = 'delete-bnt';
    deleteBnt.type = 'button';
    li.appendChild(span);
    li.appendChild(deletebnt);
    return li;
}

// Captura do submit
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
})