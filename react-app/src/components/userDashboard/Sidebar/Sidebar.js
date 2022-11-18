import styles from "./styles.module.css"
import {useTransition, animated} from "react-spring"
import { useState } from "react"

export default function Sidebar() {
	const [show, setShow] = useState(false)

	const transition = useTransition(show, {
        from: {x: 0, y: 0, opacity: 1},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x: 0, y: 0, opacity: 1},
    })

    const handleClick = () => {
    	setShow(prev => setShow(!prev))
    }

	return (
		<div style={{position: "absolute", display: "flex"}}>
			{transition((style, item) => 
				item ? <animated.div style={{display: "flex"}}>
						<div className={styles.dashboard_left}>
							
						</div>
					</animated.div>
					: ""
			)}
						<div className={styles.close_button} onClick={handleClick}><i className={show ? "fa fa-angle-left fa-2x" : "fa fa-angle-right fa-2x"}></i></div>
		</div>
	)
}