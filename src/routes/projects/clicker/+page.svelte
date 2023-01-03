<script lang="ts">
	import { writable } from 'svelte/store';
	let money = 0;
	let cursor_amount = 0;
	let loaded = false;
	if (typeof localStorage !== 'undefined') {
		if (loaded === false) {
			money = parseFloat(localStorage.getItem('money') as string);
			cursor_amount = parseFloat(localStorage.getItem('cursor_amount') as string);
		}

		setInterval(() => {
			console.log(loaded);
			localStorage.setItem('money', `${money}`);
			localStorage.setItem('cursor_amount', `${cursor_amount}`);
		}, 1000);
	}
	function addOne() {
		money += 1;
	}

	function buycursor() {
		if (money < 200) return;
		money -= 200;
		cursor_amount += 1;
	}
	function cursor() {
		money += 1 * cursor_amount;
	}

	setInterval(cursor, 500);
</script>

<div class="flex flex-col items-center justify-center h-[95vh]">
	<!-- gui -->
	<div class="text-center text-2xl">
		<h1>{money}</h1>
		<button on:click={addOne} class="w-64 h-64 bg-slate-600 rounded-2xl" />
		<div>
			<button on:click={buycursor}>buy cursor</button>
		</div>
		<p>cursors: {cursor_amount}</p>
		<a href="/projects/clicker/info">Info</a>
		<p class="text-xs">Aplication saves every second</p>
	</div>
</div>
