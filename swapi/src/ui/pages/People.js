import { useState } from "react"
import Main from "../../components/main/Main"
import { useEffect } from "react"
import List from "../../components/List/List"
import Listitem from "../../components/Listitem/Listitem"

const People = (props) => {
    const [people,setPeople] = useState([])
  
  
    useEffect(() => {
      fetch('https://swapi.dev/api/people/')
      .then(data => data.json())
      .then(res => res.results)
      .then(result => setPeople(result))
    },[])
  
    return (
      <Main>
          <List>
              {people.map((film,index) => {
                  return (
                      <Listitem key={index}>
                         name: {film.name} <br />
                         height: {film.height} <br />
                         mass: {film.mass} <br />
                         hair color: {film.hair_color} <br />
                         skin color: {film.skin_color} <br />
                      </Listitem>
                  )
              })}
          </List>
      </Main>
    )
  }
  
  export default People