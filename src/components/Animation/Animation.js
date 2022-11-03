import { useState, useEffect, useRef } from "react"

const Animation = () => {
    const [background, setBackground] = useState('orange')
    const divRef = useRef(10)

    useEffect(() => {
        const handleScroll = () => {

            const div = divRef.current
            console.log(div)
            console.log(div.getBoundingClientRect())

            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ?  'rgba(156,217,249)' : 'rgba(108,246,251)'
            setBackground(backgroundColor)

            return () => window.removeEventListener('scroll', handleScroll)
        }
        window.addEventListener('scroll', handleScroll); 
    }, [])

    return (
        <div id='scroll' 
            ref={divRef}
            style={{ height: '50vh', background: background }}>
            <h1>Animation</h1>            
        </div>            
    )
}

export default Animation