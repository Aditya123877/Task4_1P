import React from 'react'

import "./Tutorials.css";

import img1 from "../../Assets/tutorials1.jpeg";

import img2 from "../../Assets/tutorials3.jpeg";

import img3 from "../../Assets/tutorials.png";

export default function Navbar() {

return (

<>

<div className="tutorial-section" id='Post'>

<h2>Featured Tutorials</h2>

<div className="tutorial">

<div className="cards">

<div className="card-img">

<img src={img1} alt="react js" />

</div>

<div className="card-content">

<a href="/src/Assets/tutorials.png"><h3>My-React-Js-Tutorials</h3></a>

<p>Whole Tutorial in 50 video.</p>

<h4>username : Tutorials4U</h4>

</div>

</div>

<div className="cards">

<div className="card-img">

<img src={img2} alt="node js" />

</div>

<div className="card-content">

<a href="/src/Assets/tutorials1.jpeg"><h3>Node-js-Tutorials</h3></a>

<p>WonderFul Tutorial for Node js.</p>

<h4>username : techWorld</h4>

</div>

</div>

<div className="cards">

<div className="card-img">

<img src={img3} alt="react hook" />

</div>

<div className="card-content">

<a href="/src/Assets/tutorials3.jpeg"><h3>React-Hooks-Tutorial</h3></a>

<p>Must watch React-Hook for better understanding of react concept.</p>

<h4>username : book4you</h4>

</div>

</div>

</div>

<div className="btn">

<button>See all Tutorials</button>

</div>

</div>

</>

)

}