import { Link } from "react-router-dom"
export default function Header() {

    return (
        <nav id="navbar">
            <h1 className="name">Kevin Hedengren</h1>
            <div className="links"> {/*changes components when clicked */}
                <Link to="/">About me</Link>
                <Link to="/repos">Projects</Link>
                <Link to="/contact-me">Contact me</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
}