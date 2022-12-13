import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Login = () => {	
	const navigate = useNavigate()
	const {store, actions} = useContext(Context)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const token = sessionStorage.getItem("token")
	console.log("token " + token)
	const handleClick = () => {
		const opts = {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify({
			"email": email,
			"password": password
		})
	};

		fetch("https://3001-4geeksacade-reactflaskh-x9zocgij5rf.ws-eu78.gitpod.io/api/login", opts)
		.then(resp=>{
			if(resp.status===200) return resp.json();
			else alert("Las credenciales no son correctas")
		})
		.then(data => sessionStorage.setItem("token", data.token))
		// .then(navigate("/"))
		.catch(error =>{
			console.log("No se ha realizado la llamada correctamente")
		})

	}
	useEffect(() => {
		console.log("console log fuera de if")
		// if (
		//   sessionStorage.getItem("token") !== null &&
		//   sessionStorage.getItem("token") !== undefined
		// ) {
		//   console.log("console log dentro de if")
		//   Navigate("/");
		// }
	  }, [token]);


	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Login</h1>
			{sessionStorage.getItem("token")}
			{(sessionStorage.getItem("token")? "Sesión iniciada con el siguiente token " + sessionStorage.getItem("token")
			: 
			<div className="login">
				<div className="mb-2"><input className="w-50" value={email} type="text" placeholder="Usuario"  onChange={(event)=> setEmail(event.target.value)}/></div>
				<div><input className="w-50" type="password" value={password} placeholder="Password" onChange={(event)=> setPassword(event.target.value)} /></div>
				<button className="btn btn-secondary" onClick={handleClick}> Login</button>
				<p>{email}</p>
				<p>{password}</p>
						
			</div>
			
			)}

		</div>
	);
};
