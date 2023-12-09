import * as THREE from 'three';
export function createScene() {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement).className = 'fixed top-0 left-0 z-0';
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	scene.add(drawLine(10, 4.9, 0.5, 0.5));
	camera.position.z = 5;

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
		resize(camera, renderer);
	}
	animate();
}
function drawLine(x: number, y: number, x2: number, y2: number): THREE.Line {
	const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
	const points = [];
	points.push(new THREE.Vector3(x, y, 0));
	points.push(new THREE.Vector3(x2, y2, 0));

	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const line = new THREE.Line(geometry, material);
	return line;
}
function resize(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
	const width = window.innerWidth;
	const height = window.innerHeight;

	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
}
