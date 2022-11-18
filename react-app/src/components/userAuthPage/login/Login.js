import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
import LoginGoogle from "../googleAuth/login"
import LogoutGoogle from "../googleAuth/logout"
import axios from "axios"

import { gapi } from "gapi-script"

const clientId = "385770492302-7tjocaefpt94s52e4efbu696736vhk29.apps.googleusercontent.com"

export default function Login() {
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

	const [data, setData] = useState({
	    email: "",
        password: "",
        isGoogleSignIn: false
	})

	const [error, setError] = useState("")

	const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8000/api/login"
            const {data : res} = await axios.post(url, data)
            localStorage.setItem("token", res.data);
            localStorage.setItem("pizzahunt", JSON.stringify(res.userData));
            window.location = '/dashboard'
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }

        }
	}



	return (
		<div className={styles.login}>
			<div className={styles.left}>
				<img src="" alt="LOGO" />
				<form action="" onSubmit={handleSubmit}>
						
					<table><tbody>
						<tr>
							<td>
								<label htmlFor="email">Email</label>
							</td>
							<td>
								<input type="text" name="email" className={styles.input} onChange={handleChange}/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="password">Password</label>
							</td>
							<td>
								<input type="password" name="password" className={styles.input} onChange={handleChange}/>
							</td>
						</tr>
						<tr>
							<td colSpan={2} style={{textAlign: "center"}}>
								<button type="submit">Login</button>
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