const whereToPutTodos = document.querySelector("#todoContainer")

const todoFetcher = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then((arrayOfTodos) => {
            console.table(arrayOfTodos)
            for (let i=0; i<30; i++) {
                const convertedTodo = todoConverter(arrayOfTodos[i])
                displayTodoInDOM(convertedTodo)

            }
        })

}

todoFetcher()

const todoConverter = (todoObject => {
    return `
        <section class="todo">
            <h1 class="todo__title">${todoObject.title}</h1>
            <h2 class="todo__completed">${todoObject.completed}</h2>
            <input type="checkbox">
        </section>
    `
})

const displayTodoInDOM = (todoHTMLRepresentation) => {
    whereToPutTodos.innerHTML += todoHTMLRepresentation
}

