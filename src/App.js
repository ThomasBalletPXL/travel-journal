import Navbar from "./components/Navbar"
import Location from "./components/Location"
import locationData from "./locationData"
import "./style.css"

export default function App() {
    const locations = locationData.map(location => {
        return <Location 
            key={location.id}
            {...location}
        />
    })
    return (
        <div className="container">
            <Navbar />
            {locations}
        </div>
    )
}