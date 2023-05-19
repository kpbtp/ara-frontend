import { useParams, Link } from "react-router-dom"
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from "reactstrap"

const AnimeShow = ({ anime }) => {
  const { id } = useParams()

  const selectedAnime = anime.find((anime) => anime.id == id)

  if (!selectedAnime) {
    return <div>Anime not found</div>
  }

  const { name, year, synopsis, run_time, seasons, episodes, studio, genres } =
    selectedAnime

  return (
    <div className="m-auto grid items-center grid-cols-3 justify-center">
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/180"
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{synopsis}</CardText>
          <CardText>
            <small className="text-muted"><ul>
                <li>{run_time}</li>
                <li>Seasons {seasons}</li>
                <li>Episodes {episodes}</li>
                <li>Studio {studio}</li>
                <li>Genres {genres}</li>
                <li>Year {year}</li>
                </ul></small>
          </CardText>
          <Link to={`/myanimelist`}>
                <Button>Add To My Anime List</Button>
              </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default AnimeShow
