import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
import LoginGoogle from "../googleAuth/login"
import LogoutGoogle from "../googleAuth/logout"
import axios from "axios"

import { gapi } from "gapi-script"

const clientId = "385770492302-7tjocaefpt94s52e4efbu696736vhk29.apps.googleusercontent.com"

export default function Signup() {

	const [userName, setUserName] = useState()

	useEffect(() => {
	    const start = () => {
	      	gapi.auth2.init({
	        	clientId: clientId,
	        	scope: ""
	      	})
	    	}

	    gapi.load('client:auth2', start)
  	})

  	const [formData, setFormData] = useState({
  		email: "",
  		name: "",
  		isGoogleSignIn: false,
  		password: ""
  	});

  	const handleChange = ({currentTarget: input}) => {
  		setFormData({
  			...formData,
  			[input.name]: input.value
  		})
  	}

  	const handleSubmit = async (e) => {
  		e.preventDefault()
  		try {
	  		const url = "http://localhost:8000/api/registration"
	  		const res = await axios.post(url, formData)

  		} catch (err) {
  			console.log(err);
  		}
  	}

	return (
		<div className={styles.signup}>
			<div className={styles.left}>
				<img src="" alt="LOGO" />
				<form onSubmit={handleSubmit} action="post">
						
					<table><tbody>
						<tr>
							<td>
								<label htmlFor="email">Email</label>
							</td>
							<td>
								<input type="text" name="email" className={styles.input} onChange={handleChange} />
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="name">Name</label>
							</td>
							<td>
								<input type="text" name="name" className={styles.input} onChange={handleChange} />
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="password">Password</label>
							</td>
							<td>
								<input type="password" name="password" className={styles.input} onChange={handleChange} />
							</td>
						</tr>
						<tr>
							<td colSpan={2} style={{textAlign: "center"}}>
								<button type="submit">Signup</button>
							</td>
						</tr>
						<tr>
							<td colSpan={2} style={{padding: 20}}>
								OR	
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<div className={styles.google}>
									<LoginGoogle 
										setUserName={setUserName}
									/>
								</div>
							</td>
						</tr>
					</tbody></table>
				</form>
			</div>
			<div className={styles.right}>
				
			</div>
		</div>
	)
}