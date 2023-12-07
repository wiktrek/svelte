<script lang="ts">
	// src/stores/content.js
	import { writable } from 'svelte/store';
	let windows: number = 0;
	if (typeof localStorage !== `undefined`) {
		// localStorage.setItem(`windows`, `${windows}`);
		windows = Number(localStorage.getItem(`windows`));
		const id = windows + 1;
		localStorage.setItem(`windows`, `${id}`);
		console.log();
		setInterval(() => {
			let xy = `[${window.screenX}, ${window.screenY}]`;
			localStorage.setItem(`window ${id}`, xy);
		}, 100);
	}
	if (typeof window !== `undefined`) {
		window.addEventListener('beforeunload', function (e) {
			windows = Number(localStorage.getItem(`windows`));
			localStorage.setItem(`windows`, `${windows - 1}`);
		});
	}
</script>

<div class="text-3xl">
	<a href="https://wiktrek.xyz" target="_blank" class="text-[#ef2572]">wiktrek.xyz</a>
	<p>window stuff</p>
</div>
