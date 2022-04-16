import locationIcon from "../images/location.png"

export default function Location(props) {
    return (
        <section className="card">
            <img src={props.img} alt="" className="card--image"/>
            <div className="card--info">
                <div className="card--location">
                    <img src={locationIcon} alt="" className="card--locationIcon"/>
                    <p className="card--placeName">{props.location}</p>
                    <a href={props.mapLink} className="card--mapLink">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h4 className="card--duration">{props.startDate} - {props.endDate}</h4>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    )
}