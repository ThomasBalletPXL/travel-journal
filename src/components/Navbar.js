import globe from "../images/earth.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={globe} alt="" className="nav--logo"/>
            <h4 className="nav--title">my travel journal</h4>
        </nav>
    )
}