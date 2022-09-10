import React, {useEffect} from "react"
import {useTransition, animated} from "react-spring"

export default function Homepic() {
    const [scrollY, setScrollY] = React.useState(window.scrollY);

    const scroll = () => {
        setScrollY((prevState) => prevState = window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll)
    }, [])

    const transition = useTransition(scrollY < window.innerHeight/4, {
        from: {x: 300, y: 0, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x: 300, y: 0, opacity: 0},
    })
    return (
        <>
            <div className ="picture">
                {transition((style, item) => 
                    item ? 
                            <animated.div className="box" style={style}>
                                <h1>Great Pizza is here!!</h1>
                                <h3>For great price!</h3>
                            </animated.div>
                        : " "
                )}
            </div> 
        </>
    )
}