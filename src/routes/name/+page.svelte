
<script lang="js">
    import { goto } from '$app/navigation';
    export function Name() {
        
        // @ts-ignore
        let name = document.getElementById('name').value;
        goto(`/name/${name}`)
    }

</script>
<div>
    <input type="text" class="text-[#ef2572] bg-transparent" placeholder="Enter your name" id="name" />
    <button on:click={Name}>Submit</button>
</div>