<script lang="ts">
	import { writable } from 'svelte/store';
	let money = 0;
	let cursor_amount = 0;
	money = parseFloat(localStorage.getItem('money') as string);
	cursor_amount = parseFloat(localStorage.getItem('cursor_amount') as string);
	function addOne() {
		money += 1;
		localStorage.setItem('money', `${money}`);
		localStorage.setItem('cursor_amount', `${cursor_amount}`);
	}

	function buycursor() {
		if (money < 200) return;
		money -= 200;
		cursor_amount += 1;
	}
	function cursor() {
		localStorage.setItem('money', `${money}`);
		localStorage.setItem('cursor_amount', `${cursor_amount}`);
		money += 1 * cursor_amount;
	}

	setInterval(cursor, 500);
</script>

<div class="flex flex-col items-center justify-center h-[95vh]">
	<!-- gui -->
	<div class="text-center">
		<h1>{money}</h1>
		<button on:click={addOne} class="w-32 h-32 bg-slate-600 rounded-2xl" />
		<div>
			<button on:click={buycursor}>buy cursor</button>
		</div>
	</div>
</div>
