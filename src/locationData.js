import malta from "./images/malta.jpg"
import england from "./images/england.jpg"
import brighton from "./images/brighton.jpg"

const locationData = [
    {
        id: 1,
        title: "Blue Lagoon",
        location: "Malta",
        mapLink: "https://goo.gl/maps/JXFUGCjzBJemunk7A",
        startDate: "1 Aug, 2018",
        endDate: "15 Aug, 2018",
        description: "Dolphins, sea lions & other marine life populate this famed natural beach with eats & boat rides.",
        img: malta
    },
    {
        id: 2,
        title: "White Cliffs of Dover",
        location: "England",
        mapLink: "https://goo.gl/maps/vETnKG4EV7tvXEeJ7",
        startDate: "22 May, 2017",
        endDate: "22 May, 2017",
        description: "The White Cliffs of Dover is the region of English coastline facing the Strait of Dover and France. The cliff face, which reaches a height of 350 feet, owes its striking appearance to its composition of chalk accented by streaks of black flint, deposited during the Late Cretaceous.",
        img: england
    },
    {
        id: 3,
        title: "Brighton",
        location: "England",
        mapLink: "https://goo.gl/maps/vP4vRSKPrfNMqYMr6",
        startDate: "22 May, 2017",
        endDate: "27 May, 2017",
        description: "Brighton is a seaside resort and one of the two main areas of the City of Brighton and Hove. Located on the south coast of England, in the county of East Sussex, it is 47 miles south of London. Archaeological evidence of settlement in the area dates back to the Bronze Age, Roman and Anglo-Saxon periods.",
        img: brighton
    }
]

export default locationData;