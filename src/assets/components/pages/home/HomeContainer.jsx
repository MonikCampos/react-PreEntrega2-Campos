import Home from "./Home"

//aca va toda la logica y las props
const HomeContainer = () => {
    let usuario = "Mónica"
    return (
        <Home usuario={usuario}/>
    )
}

export default HomeContainer