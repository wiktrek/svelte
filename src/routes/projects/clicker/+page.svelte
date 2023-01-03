<script lang="ts">
	let count = 0;
	function addOne() {
		count += 1;
	}
</script>

<div class="flex flex-col items-center justify-center h-[95vh]">
	<button on:click={addOne}>Clicked {count} Times</button>
</div>
