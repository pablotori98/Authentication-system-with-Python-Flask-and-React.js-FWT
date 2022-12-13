import React, { useState } from "react";

export const SignUp = () => {
    const [name, setName] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="login text-center">
            <h2 className="mt-5">Registrate</h2>
                <div className="mt-3">
                    <input  className=" me-1" placeholder="Nombre" onChange={(event)=> setName(event.target.value) }></input>
                    <input className=" ms-1" placeholder="Apellido" onChange={(event)=> setApellido(event.target.value) }></input>
                </div>
                <div className="mt-3">
                    <input className="w-50" placeholder="Email" onChange={(event)=> setEmail(event.target.value) }></input>
                </div>
                <div className="mt-3">
                    <input className="w-50" placeholder="Contraseña" onChange={(event)=> setPassword(event.target.value) }></input>
                </div>
                <button className="btn btn-primary mt-3">Create User</button>

		</div>
    )
}