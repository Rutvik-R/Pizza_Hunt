import { GoogleLogout } from "react-google-login"

const clientId = "385770492302-7tjocaefpt94s52e4efbu696736vhk29.apps.googleusercontent.com"

export default function Logout() {

	const onSuccess = () => {
		console.log("Log out successfully");
		localStorage.removeItem("pizzahunt")
		window.location = "/"
	}

	return (
		<div id="signOutButton">
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	)
}