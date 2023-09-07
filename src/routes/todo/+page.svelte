
<script lang="ts">
interface Todo {
 todo: string;
 done: boolean;
}
import { writable, type Writable } from 'svelte/store';
const todos: Todo[] = [];
const todos_writable: Writable<Todo[]> = writable([]);
let error = writable("")
let todo = ""

function submit() {
load()
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
console.log(todo, todos)
save()
}
function load() {
let json = localStorage.getItem("todos") || "[]"
todos == JSON.parse(json)
}
function save() {
let json = JSON.stringify(todos);
localStorage.setItem("todos", json)
}
todos_writable.subscribe(todos => {
        todos.map((t, i) => {
    if (t.done) {
        todos.splice(i, 1)
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