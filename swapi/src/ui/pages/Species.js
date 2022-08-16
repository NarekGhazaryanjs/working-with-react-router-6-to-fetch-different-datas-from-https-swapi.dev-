import { useEffect, useState } from "react";
import List from "../../components/List/List";
import Listitem from "../../components/Listitem/Listitem";
import Main from "../../components/main/Main";

// "name": "Human", 
// "classification": "mammal", 
// "designation": "sentient", 
// "average_height": "180", 
// "skin_colors": "caucasian, black, asian, hispanic", 
// "hair_colors": "blonde, brown, black, red", 
// "eye_colors": "brown, blue, green, hazel, grey, amber", 
// "average_lifespan": "120", 
// "homeworld": "https://swapi.dev/api/planets/9/", 
// "language": "Galactic Basic", 

const Species = (props) => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
      fetch('https://swapi.dev/api/species/')
      .then(data => data.json())
      .then(result => result.results)
      .then(res => setSpecies(res))
    })
  
    return (
    <Main>
        <List>
            {species.map((specie,index) => {
                return (
                    <Listitem key={index}>
                      name  {specie.name} <br />
                      classification  {specie.classification} <br />
                      designation  {specie.designation} <br />
                      average height  {specie.average_height} <br />
                      skin colors  {specie.skin_colors} <br />
                      hair colors  {specie.hair_colors} <br />
                      eye colors  {specie.eye_colors} <br />
                      average lifespan  {specie.average_lifespan} <br />
                      homeworld  {specie.homeworld} <br />
                      language   {specie.language} <br />
                    </Listitem>
                )
            })}
        </List>
    </Main>
  )
}

export default Species