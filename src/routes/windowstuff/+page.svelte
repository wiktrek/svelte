<script lang="ts">
	// src/stores/content.js
	import { writable } from 'svelte/store';
	import { draw } from 'svelte/transition';
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
	}

	if (typeof document !== `undefined`) {
		const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

		// set line stroke and line width
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 5;
		let drawXY: number[] = JSON.parse(xy);
		// draw a red line
		ctx.beginPath();
		ctx.moveTo(drawXY[0], drawXY[1]);
		ctx.lineTo(300, 100);
		ctx.stroke();
	}
</script>

<div class="text-3xl">
	<a href="https://wiktrek.xyz" target="_blank" class="text-[#ef2572]">wiktrek.xyz</a>
	<p>window stuff</p>
	<p>{id} {xy}</p>
	<canvas id="canvas" class="fixed top-0 left-0 z-0" />
</div>
