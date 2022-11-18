import { GoogleLogin } from "react-google-login"
import styles from "./styles.module.css"
import GoogleButton from 'react-google-button'
import axios from "axios"
import { useState, useEffect } from "react"

const clientId = "385770492302-7tjocaefpt94s52e4efbu696736vhk29.apps.googleusercontent.com"

export default function Login({ setUserName }) {
	const [user, setUser] = useState();
	const handleSubmit = async () => {
		try {
			const userInfo = {
				name: user.name,
				email: user.email,
				isGoogleSignIn: true,
				password: ""
			}
			const url = "http://localhost:8000/api/registration"
			const res = await axios.post(url, userInfo)
			if (res.status === 200) {
				localStorage.setItem("pizzahunt", JSON.stringify({name: user.name, email: user.email}))
			}
			window.location = '/dashboard'
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		user && handleSubmit();
	}, [user])

	const onSuccess = (res) => {
		// console.log("Login Success! Current user: ", res.profileObj);
		setUserName(res.profileObj)
		setUser(res.profileObj)
	}

	const onFailure = (res) => {
		console.log("Login Failed! res: ", res)
	}

	return (
		<div id = "signInButton">
			<GoogleLogin 
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'signle_host_origin'}
				isSignedIn={true}
				render={(renderProps) => (
						<div className={styles.googleLogin}><GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton></div>
					)}
			/>
		</div>
	)
}