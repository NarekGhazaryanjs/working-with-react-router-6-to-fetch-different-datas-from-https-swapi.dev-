import { useEffect, useState } from "react"
import List from "../../components/List/List"
import Listitem from "../../components/Listitem/Listitem"
import Main from "../../components/main/Main"




const Films = (props) => {
  const [films,setFilms] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
    .then(data => data.json())
    .then(res => res.results)
    .then(result => setFilms(result))
  },[])

  return (
    <Main>
        <List>
            {films.map((film,index) => {
                return (
                    <Listitem key={index}>
                      title  {film.title} <br />
                      episode  {film.episode_id} <br />
                      opening crawl  {film.opening_crawl} <br />
                      director  {film.director} <br />
                      producer  {film.producer} <br />
                      release date  {film.release_date} <br />
                    </Listitem>
                )
            })}
        </List>
    </Main>
  )
}

export default Films