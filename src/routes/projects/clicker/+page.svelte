<script lang="ts">
	import { writable } from 'svelte/store';
	let money = 0;
	let cursor_amount = 0;
	let farm_amount = 0;
	let mine_amount = 0;
	let loaded = false;
	if (typeof localStorage !== 'undefined') {
		if (loaded === false) {
			money = parseFloat(localStorage.getItem('money') as string) || 0;
			cursor_amount = parseFloat(localStorage.getItem('cursor_amount') as string) || 0;
			farm_amount = parseFloat(localStorage.getItem('farm_amount') as string) || 0;
			mine_amount = parseFloat(localStorage.getItem('mine_amount') as string) || 0;
			loaded = true;
		}

		const a = setInterval(() => {
			console.log(loaded);
			localStorage.setItem('money', `${money}`);
			localStorage.setItem('cursor_amount', `${cursor_amount}`);
			localStorage.setItem('farm_amount', `${farm_amount}`);
			localStorage.setItem('mine_amount', `${mine_amount}`);
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
		if (money < 1000) return;
		money -= 1000;
		farm_amount += 1;
	}
	function buymine() {
		if (money < 10000) return;
		money -= 10000;
		mine_amount += 1;
	}
	function cursor() {
		money += 1 * cursor_amount;
	}
	function farm() {
		money += 10 * farm_amount;
	}
	function mine() {
		money += 110 * mine_amount;
	}
	function reset() {
		money = 0;
		cursor_amount = 0;
		farm_amount = 0;
		mine_amount = 0;
	}
	setInterval(cursor, 1000);
	setInterval(farm, 1000);
	setInterval(mine, 1000);
</script>

<head>
	<title>clicker: {money} - svelte.wiktrek.xyz</title>
</head>
<div class="flex flex-col items-center justify-center h-[95vh]">
	<!-- gui -->
	<div class="text-center text-2xl">
		<h1>{money}</h1>

		<button on:click={addOne} class="w-64 h-64 bg-slate-600 rounded-2xl" />
		<ul class="list-none">
			<li>
				<button on:click={buycursor}>buy cursor</button>
				<p>cursors: {cursor_amount}</p>
			</li>
			<li>
				<button on:click={buyfarm}>buy farm</button>
				<p>farms: {farm_amount}</p>
			</li>
			<li>
				<button on:click={buymine}>buy mine</button>
				<p>farms: {mine_amount}</p>
			</li>
		</ul>
		<a href="/projects/clicker/info">Info</a>
		<p class="text-xs">Aplication saves every second</p>
		<button class="text-xs" on:click={reset}>RESET</button>
	</div>
</div>
