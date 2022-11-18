import styles from "../styles.module.css"

export default function FoodCard({ foodData }) {
	

	return (
		foodData && 
			<div className={styles.food__card}>
				<div className={styles.food__image} style={{backgroundImage: `url(${foodData.img})`}}></div>
				<p className={styles.food__name}>{foodData.name}</p>
				<p className={styles.food__dsc}>{foodData.dsc}</p>
				<div className={styles.food__price}>
					<p className={styles.food__cost}>${foodData.price}</p>
					<div className={styles.add__button} >ADD</div>
				</div>
			</div>
	)
}