import React, { useState, useContext } from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { TjTest } from "./TjTest"

const MyAnimeList = ({ anime }) => {
  const { selectedAnimeIds } = useContext(TjTest)
  const [genreFilter, setGenreFilter] = useState("")

  console.log("List", selectedAnimeIds)

  if (!Array.isArray(selectedAnimeIds)) {
    return <div>No anime selected</div>
  }

 
  const filteredAnime = anime.filter(({ id, genres }) => {
    if (
      genreFilter &&
      !genres.toLowerCase().includes(genreFilter.toLowerCase())
    ) {
      return false
    }
    return selectedAnimeIds.includes(id)
  })

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

      {filteredAnime.map(({ id, name, genres, synopsis }) => (
        <Card className="flex w-18rem mx-auto my-0" key={id}>
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {genres}
            </CardSubtitle>
            <CardText>{synopsis}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default MyAnimeList
