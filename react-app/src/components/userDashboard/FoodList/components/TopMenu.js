import styles from "../styles.module.css"

export default function TopMenu() {
	return (

		<div className={styles.topMenu} >
			<i className="fa fa-gear"></i>
			<i className="fa fa-bell"></i>
			<i className="fa fa-user-circle-o"></i>
			<p className={styles.user_name}>Hello, {JSON.parse(localStorage.getItem("pizzahunt")).name.split(" ", 2)[0]}</p>
			<i className="fa fa-angle-down"></i>
		</div>
	)
}