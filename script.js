const lista = document.querySelector('.tasks');
const add = document.querySelector('.button-add');

add.addEventListener('click', createTask);

// Adiciona o event listener para o campo de entrada
const inputField = document.querySelector('.input');
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    createTask();
  }
});

function createTask() {
  const tarefa = document.querySelector('.input');

  if (tarefa.value.trim() === '') {
    alert('Escreva algo');
  } else {
    // Criando o item da lista
    const item = document.createElement('div');
    item.classList.add('task');
    lista.appendChild(item);

    // Adicionando o checked e a tarefa
    const task_info = document.createElement('div');
    task_info.classList.add('task-info');
    item.appendChild(task_info);

    const button_checked = document.createElement('button');
    const icone_checked = document.createElement('i');
    icone_checked.classList.add('fa-solid', 'fa-check');
    button_checked.appendChild(icone_checked);
    button_checked.classList.add('checked');
    task_info.appendChild(button_checked);

    const p = document.createElement('p');
    p.classList.add('task-paragraph');
    p.textContent = tarefa.value;
    task_info.appendChild(p);
    tarefa.value = '';

    // Adicionando os botões de configurações 
    const buttons = document.createElement('div');
    const button_editar = document.createElement('button');
    const button_apagar = document.createElement('button');
    const icone_apagar = document.createElement('i');
    const icone_editar = document.createElement('i');

    icone_apagar.classList.add('fa-solid', 'fa-x');
    icone_editar.classList.add('fa-solid', 'fa-pencil');

    button_apagar.appendChild(icone_apagar);
    button_editar.appendChild(icone_editar);

    buttons.classList.add('buttons');
    button_apagar.classList.add('apagar');
    button_editar.classList.add('editar');

    buttons.appendChild(button_editar);
    buttons.appendChild(button_apagar);

    item.appendChild(buttons);

    // Configurando as funções dos botões 
    button_checked.addEventListener('click', () => {
      p.classList.toggle('paragraph-checked');
      button_checked.classList.toggle('checked')
      button_checked.classList.toggle('checked-active')
    });

    button_apagar.addEventListener('click', () => {
      item.remove();
    });

    button_editar.addEventListener('click', () => {
      const item_editado = prompt('digite algo')
      p.textContent = item_editado
    })
  }
}
