import axios from 'axios'

// https://jsonplaceholder.typicode.com/todos/1

async function fetchData(){
// use of interface to show our response types
    interface Todo{
        id:number,
        title:string,
        completed:boolean
    }

let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
// with use of type annotations
const todo = response.data as Todo

logTodo(todo.id,todo.title,todo.completed)


}

fetchData()

const logTodo = (id:number,title:string,completed:boolean) => {
console.log(`
The todo with ID:${id}
Has a title of ${title}
Is it finished: ${completed}

`)

}