
<script lang="ts">
interface Todo {
 todo: string;
 done: boolean;
}
import { writable, type Writable } from 'svelte/store';


let todos: Todo[] = []
const todos_writable: Writable<Todo[]> = writable(todos);
let error = writable("")
let todo = ""
if (typeof localStorage !== `undefined`) {
    if (localStorage.getItem("todos") !== null) {
        todos = JSON.parse(localStorage.getItem("todos") || "[]");
        todos_writable.set(todos)
    }
}
function submit() {
error.set("")
todos.map(t => {
    if (t.todo === todo) {
    console.log("Err")
    return error.set("Error to do already exists")
    }
})
if ($error !== "") return 

todos.push({todo, done: false})
todos_writable.set(todos)
save()
}
function load() {
todos == $todos_writable
save()
}
function save() {
let json = JSON.stringify(todos);
localStorage.setItem("todos", json)
}
todos_writable.subscribe(todos => {
        todos.map((t, i) => {
    if (t.done) {
        todos.splice(i, 1)
    load()
    }
})
})

</script>
<div>
<input placeholder="enter to do name" class="bg-transparent" id="name" bind:value={todo}/>
<button class="bg-[#0cabc0] rounded" on:click={submit}>Add to do</button>
<p class="text-[#ef2572]">{$error}</p>
<p>to do:</p>
    {#each $todos_writable as todo}
	<p>{todo.todo}
    <input type="checkbox" id={todo.todo} bind:checked={todo.done}/>
    </p>
    
{/each}
</div>