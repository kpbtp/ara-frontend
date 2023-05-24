import React, { useState, useContext } from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { TjTest } from "./TjTest"

const MyAnimeList = ({ animeList }) => {
  const { selectedAnimeIds } = useContext(TjTest)
  const [genreFilter, setGenreFilter] = useState([])

  console.log("List", selectedAnimeIds)

  if (!Array.isArray(selectedAnimeIds)) {
    return <div>No anime selected</div>
  }

 
  const filteredAnime = animeList.filter(({ mal_id, genres }) => {
    console.log("id", mal_id)
    if (
      genreFilter &&
      !genres.toLowerCase().includes(genreFilter.toLowerCase())
    ) {
      return false
    }
    return selectedAnimeIds.includes(mal_id)

  })
 console.log("Filtered Anime", filteredAnime);
  
 return (
    <div className="m-auto grid items-center grid-cols-3 justify-center">
      <div>
        <input
          type="text"
          placeholder="Filter by genre"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        />
      </div>

      {filteredAnime.map(( anime ) => (
        <Card className="flex w-18rem mx-auto my-0" key={anime.mal_id}>
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{anime.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {anime.genres}
            </CardSubtitle>
            <CardText>{anime.synopsis}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default MyAnimeList
