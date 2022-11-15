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

const ID = todo.id
const title = todo.title
const finished = todo.completed

console.log(`
The todo with ID:${ID}
Has a title of ${title}
Is it finished: ${finished}

`)
}

const lang = "en"

fetchData()