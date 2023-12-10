<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { createScene } from './three';
	interface Window {
		id: number;
		prev: number;
	}
	let windows: Window[] = [];
	const id = (Math.random() * 100).toFixed();
	let prev = 0;
	let xy: string = '[]';
	if (typeof localStorage !== `undefined`) {
		if (localStorage.getItem('windows') != null) {
			windows = JSON.parse(localStorage.getItem('windows') as string) as Window[];
		}

		windows.push({ id: Number(id), prev: prev } as Window);

		localStorage.setItem(`windows`, `${JSON.stringify(windows)}`);

		console.log();
		setInterval(() => {
			xy = `[${window.screenX}, ${window.screenY}]`;
			localStorage.setItem(`window ${id}`, xy);
			windows = JSON.parse(localStorage.getItem('windows') as string) as Window[];
			localStorage.setItem('windows', `${JSON.stringify(windows)}`);
		}, 100);
	}
	if (typeof window !== `undefined`) {
		window.addEventListener('beforeunload', function (e) {
			// windows = Number(localStorage.getItem(`windows`));
			const index = windows.indexOf({
				id: Number(id),
				prev: prev
			} as Window);
			if (index > -1) {
				windows.splice(index, 1);
			}

			localStorage.removeItem(`windows`);
			localStorage.setItem(`windows`, `${JSON.stringify(windows)}`);
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
