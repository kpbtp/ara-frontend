import React, { createContext, useContext, useEffect, useState } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Input,
} from "reactstrap"
import { NavLink } from "react-router-dom"
import MyAnimeList from "./MyAnimeList"
import { TjTest } from "./TjTest"

const AnimeIndex = ({ anime }) => {
  const { selectedAnimeIds, setSelectedAnimeIds } = useContext(TjTest)

  const handleCheckboxChange = (id) => {
    setSelectedAnimeIds([...selectedAnimeIds, id])
    if (selectedAnimeIds.includes(id)) {
      setSelectedAnimeIds(selectedAnimeIds.filter((animeId) => animeId !== id))
    } else {
      setSelectedAnimeIds([...selectedAnimeIds, id])
    }
    console.log(selectedAnimeIds)
  }

  console.log("TJ-selectedAnimeIds", selectedAnimeIds)

  return (
    <div>
      <div className="m-auto grid items-center grid-cols-3 justify-center">
        {anime?.map(({ id, name, genres, synopsis }) => {
          const isChecked = selectedAnimeIds.includes(id)

          return (
            <Card className="flex w-18rem mx-auto my-0" key={id}>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {genres}
                </CardSubtitle>
                <CardText>{synopsis}</CardText>
                <Input
                  type="checkbox"
                  name="animeSelection"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id)}
                />{" "}
                Add to My Anime List
                <NavLink to={`/animeshow/${id}`}>
                  <Button>Read More</Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
      <MyAnimeList selectedAnimeIds={selectedAnimeIds} anime={anime} />
    </div>
  )
}

export default AnimeIndex
