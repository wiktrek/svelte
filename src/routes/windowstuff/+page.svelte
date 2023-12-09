<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { createScene } from './three';
	let windows: number[] = [];
	const id = (Math.random() * 100).toFixed();
	let xy: string = '[]';
	if (typeof localStorage !== `undefined`) {
		localStorage.setItem(`windows`, ``);
		console.log();
		setInterval(() => {
			xy = `[${window.screenX}, ${window.screenY}]`;
			localStorage.setItem(`window ${id}`, xy);
		}, 100);
	}
	if (typeof window !== `undefined`) {
		window.addEventListener('beforeunload', function (e) {
			// windows = Number(localStorage.getItem(`windows`));
			localStorage.removeItem(`window ${id}`);
		});
		createScene();
	}
</script>

<!-- <div class="text-3xl">
	<a href="https://wiktrek.xyz" target="_blank" class="text-[#ef2572]">wiktrek.xyz</a>
	<p>window stuff</p>
	<p>{id} {xy}</p>
</div> -->
