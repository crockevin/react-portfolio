import { useState } from "react"

export default function AboutMe() {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="about-me">
            <img src="/Images/pfp.jpg" alt="pfp" />
            <div>
                <p>My name is Kevin, I'm studying to be a full stack developer</p>
                <p>What I've learned so far</p>
                <button onClick={handleClick}>Clcik me</button>
                {counter}
                
            </div>
        </div>
    )
}