<script lang="ts">
const todos: string[] = [];
let error = ""
let todo = ""
function submit() {
if (todos.includes(todo)) {
console.log("Err")
return error == "Error to do already exists"
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
<p>{error}</p>
</div>