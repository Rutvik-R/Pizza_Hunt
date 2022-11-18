import styles from "../styles.module.css"

export default function Search() {

	return (
		<div className={styles.search__searchBox} >
			<div className={styles.search__searchIcon} ><i className="fa fa-search" style={{color: "#F24E1E", fontSize: "24px"}}></i></div>
			<input type="text" className={styles.search__input} placeholder="Search..." />
		</div>
	)
}