const lista = document.querySelector('.tasks');
const add = document.querySelector('.button-add');


const height = lista.offsetHeight;

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
    icone_editar.classList.add('fa-solid', 'fa-pen-to-square');

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

      const notification_checked_task = document.querySelector('.notification-checked-task')

      notification_checked_task.style.display = 'block'

      setTimeout(() => {
        notification_checked_task.style.display = 'none'
      },2000)
    });

    button_apagar.addEventListener('click', () => {
      item.remove();

      const notification_turned_task = document.querySelector('.notification-turned-task')

      notification_turned_task.style.display = 'block'

      setTimeout(() => {
        notification_turned_task.style.display = 'none'
      },2000)

    });

    button_editar.addEventListener('click', () => {
      const item_editado = prompt('digite algo')

      if (item_editado.length > 0 && item_editado.trim() !== '') {
        p.textContent = item_editado
      } 

      const notification_edit_task = document.querySelector('.notification-edit-task')

      notification_edit_task.style.display = 'block'

      setTimeout(() => {
        notification_edit_task.style.display = 'none'
      },2000)

    })

    const notification_create_task = document.querySelector('.notification-create-task')

    notification_create_task.style.display = 'block'

    setTimeout(() => {
          notification_create_task.style.display = 'none'
    },2000)

    const height = lista.offsetHeight;

    if (height >= 550) {
      lista.style.overflowY = 'scroll'
      lista.style.paddingRight = '20px'
    } else {
       lista.style.overflowY = 'hidden'
      lista.style.paddingRight = '0px'
    }
  }
}

const theme = document.querySelector('.theme')
const circle_theme = document.querySelector('.circle-theme')

theme.addEventListener('click', () => {
  circle_theme.classList.toggle('circle-theme-active')
})
