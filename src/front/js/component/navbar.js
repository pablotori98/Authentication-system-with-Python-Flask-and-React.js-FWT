import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const token = sessionStorage.getItem("token")
	const removeToken = ()=>{
		return sessionStorage.removeItem("token")
	}

	

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link className="text-decoration-none" to="/">
					<h2 className="navbar-brand mb-0 h1 text-white">Free Pizza</h2>
				</Link>
				<div className="ml-auto">

					{token ? //Preguntamos si esta el token para saber si el boton es login o logout
					<Link to="/">
						<button className="btn btn-primary" onClick={removeToken} >Logout</button>
					</Link>: 
					<div>
					<Link to="/login">
					<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup"><button className="btn btn-primary ms-2">Sign Up</button></Link>
					</div>
					}
				</div>
			</div>
		</nav>
	);
};
