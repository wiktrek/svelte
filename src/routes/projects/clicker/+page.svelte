<script lang="ts">
	import { writable } from 'svelte/store';
	let money = 0;
	let cursor_amount = 0;
	let farm_amount = 0;
	let loaded = false;
	if (typeof localStorage !== 'undefined') {
		if (loaded === false) {
			money = parseFloat(localStorage.getItem('money') as string);
			cursor_amount = parseFloat(localStorage.getItem('cursor_amount') as string);
			farm_amount = parseFloat(localStorage.getItem('farm_amount') as string);
		}

		setInterval(() => {
			localStorage.setItem('money', `${money}`);
			localStorage.setItem('cursor_amount', `${cursor_amount}`);
			localStorage.setItem('farm_amount', `${farm_amount}`);
		}, 1000);
	}
	function addOne() {
		money += 1;
	}

	function buycursor() {
		if (money < 100) return;
		money -= 100;
		cursor_amount += 1;
	}
	function buyfarm() {
		if (money < 2000) return;
		money -= 2000;
		farm_amount += 1;
	}
	function cursor() {
		money += 1 * cursor_amount;
	}
	function farm() {
		money += 10 * farm_amount;
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
			<p>cursors: {cursor_amount}</p>
		</div>
		<div>
			<button on:click={buyfarm}>buy farm</button>
			<p>farms: {farm_amount}</p>
		</div>
		<a href="/projects/clicker/info">Info</a>
		<p class="text-xs">Aplication saves every second</p>
	</div>
</div>
