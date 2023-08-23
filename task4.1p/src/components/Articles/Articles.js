import React from 'react'

import "./Articles.css";

import img1 from "../../Assets/articles.jpeg";

import img2 from "../../Assets/articles1.jpeg";

import img3 from "../../Assets/articles3.jpeg";

export default function Navbar() {

return (

<>

<div className="articles-section">

<h2>Featured Articles</h2>

<div className="articles">

<div className="cards">

<div className="card-img">

<img src={img1} alt="react js" />

</div>

<div className="card-content">

<a href="/src/Assets/articles.jpeg"> <h3>My-React-Js-Articles</h3></a>

<p>React js is javascript Library.</p>

<h4>Author : Lionel Lopez</h4>

</div>

</div>

<div className="cards">

<div className="card-img">

<img src={img2} alt="node js" />

</div>

<div className="card-content">

<a href="/src/Assets/articles1.jpeg"> <h3>Node-js-Articles</h3></a>

<p>runtime environment that runs on a Javascript Engine .</p>

<h4>Author : techbrust.io</h4>

</div>

</div>

<div className="cards">

<div className="card-img">

<img src={img3} alt="react hook" />

</div>

<div className="card-content">

<a href="/src/Assets/articles2.png"> <h3>My-React-Hooks</h3></a>

<p>Hooks allow you to reuse stateful logic without changing your component hierarchy.</p>

<h4>Author : codebrust.io</h4>

</div>

</div>

</div>

<div className="btn">

<button>See all articles</button>

</div>

</div>

</>

)

}