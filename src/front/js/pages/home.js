import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center d-flex justify-content-evenly align-items-center h100">
			<div className="w-50">
			<h1 className="h1home">Do you want pizza?</h1>
			<p className="phome">Sign in or sign up for free pizza</p>
			</div>

			<div className="mt-5 w-50">
				<img src="https://images.vexels.com/media/users/3/263340/isolated/preview/92d75abef1c7523630339a2793eba5eb-rebanada-de-trazo-de-color-de-pizza.png"/>
			</div>

		</div>
	);
};
