
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
if (todos.includes({todo, done: false})) {
console.log("Err")
return error.set("Error to do already exists")
}
error.set("")
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
console.log(localStorage.getItem("todos"))
}

</script>
<div>
<input placeholder="enter to do name" class="bg-transparent" id="name" bind:value={todo}/>
<button class="bg-[#0cabc0] rounded" on:click={submit}>Add to do</button>
<p class="text-[#ef2572]">{$error}</p>
<p>to do:</p>
    {#each $todos_writable as todo}
	<p>{todo.todo}</p>
    <input type="checkbox" id={todo.todo} on:/>
{/each}
</div>