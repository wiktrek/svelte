<script lang="ts">
import { writable } from 'svelte/store';
const todos: string[] = [];
let error = writable("")
let todo = ""
function submit() {
if (todos.includes(todo)) {
console.log("Err")
return error.set("Error to do already exists")
}
todos.push(todo)

console.log(todo, todos)
}

function save() {

}
</script>
<div>
<input placeholder="enter to do name" class="bg-transparent" id="name" bind:value={todo}/>
<button class="bg-[#0cabc0] rounded" on:click={submit}>Add to do</button>
<p class="text-[#ef2572]">{$error}</p>
</div>