import { useEffect, useState } from "react"
import List from "../../components/List/List"
import Listitem from "../../components/Listitem/Listitem"
import Main from "../../components/main/Main"



    // "name": "Sand Crawler", 
    // "model": "Digger Crawler", 
    // "manufacturer": "Corellia Mining Corporation", 
    // "cost_in_credits": "150000", 
    // "length": "36.8 ", 
    // "max_atmosphering_speed": "30", 
    // "crew": "46", 
    // "passengers": "30", 
    // "cargo_capacity": "50000", 
    // "consumables": "2 months", 
    // "vehicle_class": "wheeled", 
    



const Vehicles = (props) => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles/')
        .then(data => data.json())
        .then(res => res.results)
        .then(result => setVehicles(result))

    })

   return (
    <Main>
        <List>
            {vehicles.map((vehicle,index) => {
                return (
                    <Listitem key={index}>
                       name: {vehicle.name} <br />
                       model: {vehicle.model} <br />
                       manufacturer: {vehicle.manufacturer} <br />
                       cost in credits: {vehicle.cost_in_credits} <br />
                       length: {vehicle.length} <br />
                       max atmosphering speed: {vehicle.max_atmosphering_speed} <br />
                       crew: {vehicle.crew} <br />
                       passengers: {vehicle.passengers} <br />
                       cargo capacity: {vehicle.cargo_capacity} <br />
                       consumables: {vehicle.consumables} <br />
                       vehicle class: {vehicle.vehicle_class} <br />
                    </Listitem>
                )
            })}
        </List>
    </Main>
  )
}

export default Vehicles