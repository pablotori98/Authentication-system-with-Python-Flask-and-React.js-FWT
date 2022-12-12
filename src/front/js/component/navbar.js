import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const token = sessionStorage.getItem("token")
	const removeToken = ()=>{
		return sessionStorage.removeItem("token")
	}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">

					{token ? //Preguntamos si esta el token para saber si el boton es login o logout
					<Link to="/">
						<button className="btn btn-primary" onClick={removeToken} >Logout</button>
					</Link>: 
					<Link to="/login">
					<button className="btn btn-primary">Login</button>
					</Link>}
				</div>
			</div>
		</nav>
	);
};
