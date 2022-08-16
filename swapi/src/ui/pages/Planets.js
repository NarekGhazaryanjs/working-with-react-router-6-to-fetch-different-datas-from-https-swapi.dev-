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