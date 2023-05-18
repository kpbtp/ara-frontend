import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap"
import { NavLink } from "react-router-dom"
import "../pages/Index.css"

const AnimeIndex = ({ anime }) => {
  return (
    <div className="m-auto grid items-center grid-cols-3 justify-center">
      {anime?.map(({name,year, synopsis, run_time, seasons, episodes, studio, genres}) => {
        return (
          <Card className="flex w-18rem mx-auto my-0">
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {genres}
            </CardSubtitle>
            <CardText>
              {synopsis}
            </CardText>
            <NavLink to="/animeshow/{anime.id}">
              <Button>Button</Button>
            </NavLink>
          </CardBody>
        </Card>
        )
          })}
    </div>
  )
}

export default AnimeIndex
