const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// login: (email, password)=>{
			// 		const opts = {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type":"application/json"
			// 		},
			// 		body: JSON.stringify({
			// 			email: email,
			// 			password: password
			// 		})
			// 	};
			
			// 		fetch("https://3001-4geeksacade-reactflaskh-x9zocgij5rf.ws-eu77.gitpod.io/api/login", opts)
			// 		.then(resp=>{
			// 			if(resp.status===200) return resp.json();
			// 			else alert("There has been some error")
			// 		})
			// 		.then(data => sessionStorage.setItem("token", data.token))
			// 		.catch(error =>{
			// 			console.log("There was an error")
			// 		})
			// 	console.log("funciono")
			// },

			login: async (email, password) =>{
				const store = getStore();
				const resp = await fetch(process.env.BACKEND_URL+"/api/login", {
					method: "POST",
					headers: {"Content-Type":"aplicattion/json"},
					body: JSON.stringify({
						email: email,
						password: password
					}),
				});
				if(!resp.ok) throw Error("Problema en el login")
				if(resp.status ===401){
					throw "Credenciales no validas"
				}
				else if(resp.status ===400){
					throw "Formato usuario o contraseña no valido"
				}
				const data = await resp.json();
				localStorage.setItem("token", data.token);
				setStore({token : data.token})
				return true
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
