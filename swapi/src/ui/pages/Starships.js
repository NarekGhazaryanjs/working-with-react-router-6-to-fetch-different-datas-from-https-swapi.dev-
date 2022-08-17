import { useEffect, useState } from "react";
import List from "../../components/List/List";
import Listitem from "../../components/Listitem/Listitem";
import Main from "../../components/main/Main";
import NestedItem from "../../components/nesteditem/Nesteditem";

// {
//     "name": "CR90 corvette", 
//     "model": "CR90 corvette", 
//     "manufacturer": "Corellian Engineering Corporation", 
//     "cost_in_credits": "3500000", 
//     "length": "150", 
//     "max_atmosphering_speed": "950", 
//     "crew": "30-165", 
//     "passengers": "600", 
//     "cargo_capacity": "3000000", 
//     "consumables": "1 year", 
//     "hyperdrive_rating": "2.0", 
//     "MGLT": "60", 
//     "starship_class": "corvette", 
//     "pilots": [], 
//     "films": [
//         "https://swapi.dev/api/films/1/", 
//         "https://swapi.dev/api/films/3/", 
//         "https://swapi.dev/api/films/6/"
//     ], 
//     "created": "2014-12-10T14:20:33.369000Z", 
//     "edited": "2014-12-20T21:23:49.867000Z", 
//     "url": "https://swapi.dev/api/starships/2/"
// }, 

const Starships = (props) => {
  const [starships,setStarships] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(res => res.json())
    .then(result => result.results)
    .then(data => setStarships(data))
  },[])

  return (
    <Main>
        <List>
            {starships.map((starship,index) => {
                return (
                    <Listitem key={index}>
                        name: {starship.name} <br />
                        model: {starship.model} <br />
                        manufacturer: {starship.manufacturer} <br />
                        cost in credits: {starship.cost_in_credits} <br />
                        length: {starship.length} <br />
                        max atmosphering speed: {starship.max_atmosphering_speed} <br />
                        crew: {starship.crew} <br />
                        passengers: {starship.passengers} <br />
                        cargo capacity: {starship.cargo_capacity} <br />
                        consumables: {starship.consumables} <br />
                        hyperdrive rating: {starship.hyperdrive_rating} <br />
                        MGLT: {starship.MGLT} <br />
                        starship class: {starship.starship_class} <br />
                        created: {starship.created} <br />
                        edited: {starship.edited} <br />
                        url: {starship.url} <br />
                        films: {starship.films.map((film,index) => {
                            return (
                                <NestedItem key={index}>
                                    {film} <br />
                                </NestedItem>
                            )
                        })} 
                    </Listitem>
                )
            })}
        </List>
    </Main>
  )
}

export default Starships