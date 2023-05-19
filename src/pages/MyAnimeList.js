import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardText,
  } from "reactstrap"
  import { NavLink } from "react-router-dom"
  
  const MyAnimeList = ({ anime }) => {
    return (
      <div className="m-auto grid items-center grid-cols-3 justify-center">
        {anime?.map(({ id, name, year, synopsis, run_time, seasons, episodes, studio, genres }) => {
          return (
            <Card className="flex w-18rem mx-auto my-0" key={id}>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {genres}
                </CardSubtitle>
                <CardText>
                  {synopsis}
                </CardText>
                <NavLink to={`/myanimelistshow/${id}`}>
                  <Button>Button</Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    )
  }
  
  export default MyAnimeList
  