// import logo from './logo.svg';
import React from 'react';

import './App.css';

import Navbar from "./components/Navbar/Navbar"; // Make sure the path is correct

import MenuBar from "./components/MenuBar/MenuBar";

import Profile from "./components/Profile/Profile";

import Articles from "./components/Articles/Articles";

import Tutorials from "./components/Tutorials/Tutorials";

import Subscribe from "./components/Subscribe/Subscribe";

import Footer from "./components/Footer/Footer";


function App() {

return (

<div className="App">
<MenuBar />
<Navbar />

<Profile/>

<Articles/>

<Tutorials/>

<Subscribe/>

<Footer/>

</div>

);

}

export default App;
