// import 'babel-polyfill';
import HelloWorld from './components/HelloWorld/HelloWorld';

// Get/create all nodes
const body = document.querySelector('body');
const helloWorld = new HelloWorld();
const render = helloWorld.render();

// Append the nodes
body.innerHTML = render;
