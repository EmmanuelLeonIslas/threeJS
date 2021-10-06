//We need 3 things everytime we use Three.js
//Scene + Camera + Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

//Add scene to html document body
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#222222");
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

//Resize canvas on resize window
window.addEventListener('resize', ()=>{
	let width = window.innerWidth;
	let height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

//Basic cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({color: "#ff7700"});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Wireframe cube
var geometry = new THREE.BoxGeometry(4, 4, 4);
var material = new THREE.MeshBasicMaterial({
    color: "#ff7a7a", wireframe: true, transparent: true
});
var wireframeCube = new THREE.Mesh(geometry, material);
scene.add(wireframeCube);

//Ambient light
var ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

//Point light
var pointLight = new THREE.PointLight("#ffffff", 1 );
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

//Animation
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    wireframeCube.rotation.x -= 0.005;
    wireframeCube.rotation.y -= 0.005;
    renderer.render(scene, camera);
}

animate();