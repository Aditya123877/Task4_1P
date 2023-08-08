import React from 'react';

// import { IconName } from "react-icons/fa";

import { BsSearch } from "react-icons/bs";

import "./Navbar.css";

// import InputAdornment from '@material-ui/core/InputAdornment';

// import TextField from '@material-ui/core/TextField';

// import SearchIcon from "@material-ui/icons/Search";

export default function Navbar() {

return (

<>

<nav>

<div className="navbar-container " id='navbarid'>

<div id="logo">

<a href="#home">

<h3>DEV@Deakin</h3></a>

</div>

<div className="input">

{/* marginTop: 100, marginLeft: 100 , */}

{/* <TextField

style={{ width:700}}

id="standard-bare"

defaultValue='Search'

margin="normal"

InputProps={{

endAdornment: (

<InputAdornment position="end">

<SearchIcon/>

</InputAdornment>

)

}}

/> */}

<span><BsSearch /></span>

{/* <i className="fa fa-search"></i> */}

<input type="text" placeholder='Search' />

</div>

<div className="list1">

<ul>

<a href='#Post' id="item4"><li>Post</li></a>

<a href='#Login' id="item5"><li>Login</li></a>

</ul>

</div>

</div>

</nav>

</>

)
}