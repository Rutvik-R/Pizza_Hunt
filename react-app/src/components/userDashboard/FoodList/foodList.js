import React from "react"
import Search from "./components/Search"
import TopMenu from "./components/TopMenu"
import styles from "./styles.module.css"
import FoodMenu from "./components/FoodMenu"
import CheckoutMenu from "./components/CheckoutMenu"

export default function FoodList() {
	return (
		<div className={styles.foodList__Dashboard}>	
			<div className={styles.foodList__Topbar} >
				<Search />
				<TopMenu />
			</div>
			<div className={styles.foodList__FoodMenu} >
				<FoodMenu />
				<CheckoutMenu />
			</div>
		</div>
	)
}