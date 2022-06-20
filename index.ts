import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts/1' 

interface Todo{
    id:number;
    title:string;
    completed:boolean;
}
axios.get(url).then(resp =>{
    const {id,title} = resp.data as Todo

    logTodo(id,title)
})
const logTodo = (id:number,title:string)=>{
    console.log(`
    The id is ${id}
    The title is ${title}
    `)
}