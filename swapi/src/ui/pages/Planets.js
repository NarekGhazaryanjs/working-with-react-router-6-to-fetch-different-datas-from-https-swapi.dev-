import { useEffect, useState } from "react"
import List from "../../components/List/List";
import Listitem from "../../components/Listitem/Listitem";
import Main from "../../components/main/Main"
import NestedItem from "../../components/nesteditem/Nesteditem";

const Planets = (props) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
    .then(data => data.json())
    .then(res => res.results)
    .then(result => setPlanets(result))
  },[])

//   {
//     "name": "Alderaan", 
//     "rotation_period": "24", 
//     "orbital_period": "364", 
//     "diameter": "12500", 
//     "climate": "temperate", 
//     "gravity": "1 standard", 
//     "terrain": "grasslands, mountains", 
//     "surface_water": "40", 
//     "population": "2000000000", 
//     "residents": [
//         "https://swapi.dev/api/people/5/", 
//         "https://swapi.dev/api/people/68/", 
//         "https://swapi.dev/api/people/81/"
//     ], 
//     "films": [
//         "https://swapi.dev/api/films/1/", 
//         "https://swapi.dev/api/films/6/"
//     ], 
//     "created": "2014-12-10T11:35:48.479000Z", 
//     "edited": "2014-12-20T20:58:18.420000Z", 
//     "url": "https://swapi.dev/api/planets/2/"
// }, 

  return (
    <Main>
        <List>
            {planets.map((planet,index) => {
                return (
                  <Listitem key={index}>
                     name {planet.name} <br />
                     rotation period {planet.rotation_period} <br />
                     orbital period {planet.orbital_period} <br />
                     diameter {planet.diameter} <br />
                     climate {planet.climate} <br />
                     gravity {planet.gravity} <br />
                     terrain {planet.terrain} <br />
                     surface water {planet.surface_water} <br />
                     population {planet.population} <br />
                     residents: {planet.residents?.map(el => {
                        return <NestedItem> {el} </NestedItem>
                     })}
                  </Listitem>
                )
                
            })}
        </List>
    </Main>
  )
}

export default Planets