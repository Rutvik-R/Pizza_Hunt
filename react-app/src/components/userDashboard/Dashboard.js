// import LogoutGoogle from "../userAuthPage/googleAuth/logout"
import styles from "./styles.module.css"
import Sidebar from "./Sidebar/Sidebar"
import FoodList from "./FoodList/foodList"
// import { useState } from "react"

export default function Dashboard() {
	if (localStorage.getItem("pizzahunt") === null ) {
		window.location = "/"
	} 

	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<FoodList />
		</div>
	)
}