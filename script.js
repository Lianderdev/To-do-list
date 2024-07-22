const lista = document.querySelector('.tasks')
const add = document.querySelector('.button-add')

add.addEventListener('click', () => {
    const tarefa = document.querySelector('.input')

    if (tarefa.value.trim() === '') {
        alert('escreva algo')
    } else {
        // Criando o item da lista
        const item = document.createElement('div')
        item.classList.add('task')
        lista.appendChild(item)

        // Adicionando o checked e a tarefa
        const task_info = document.createElement('div')
        task_info.classList.add('task-info')
        item.appendChild(task_info)

        const button_checked = document.createElement('button')
        const icone_checked = document.createElement('i')
        icone_checked.classList.add('fa-solid', 'fa-check')
        button_checked.appendChild(icone_checked )
        button_checked.classList.add('checked')
        task_info.appendChild(button_checked)

        const p = document.createElement('p')
        p.classList.add('task-paragraph')
        p.textContent = tarefa.value
        task_info.appendChild(p)
        tarefa.value = ''

        // adicinando os butões de configurações 
        const buttons = document.createElement('div')
        const button_editar = document.createElement('button')
        const button_apagar = document.createElement('button')
        const icone_apagar = document.createElement('i')
        const icone_editar = document.createElement('i')

        icone_apagar.classList.add('fa-solid', 'fa-x')
        icone_editar.classList.add('fa-solid', 'fa-pencil')

        button_apagar.appendChild(icone_apagar)
        button_editar.appendChild(icone_editar)

        buttons.classList.add('buttons')
        button_apagar.classList.add('apagar')
        button_editar.classList.add('editar')

        buttons.appendChild(button_editar)
        buttons.appendChild(button_apagar)

        item.appendChild(buttons)

        // configarando as funções dos botões 
        button_checked.addEventListener('click', () => {
            p.classList.add('paragraph-checked')
        })

        button_apagar.addEventListener('click', () => {
            item.remove()
        })
}
})

