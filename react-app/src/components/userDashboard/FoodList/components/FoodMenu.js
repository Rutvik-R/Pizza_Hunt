import styles from "../styles.module.css"
import FoodCard from "./FoodCard"
import { useState, useEffect } from "react"
import axios from "axios"

export default function FoodMenu() {

	const [foodData, setFoodData] = useState()
	

	const fetchData = async() => {
		try {
			const data = await axios.get("https://ig-food-menus.herokuapp.com/pizzas?_limit=10")
			setFoodData(data.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className={styles.menu__Container}>
			<p>Try Our Pizzas!</p>
			<div className={styles.our_pizzas} >
				{foodData && 
					foodData.map((item, index) => {
						return <FoodCard key={index} foodData={item} />
					})
				}

			</div>
		</div>
	)
}