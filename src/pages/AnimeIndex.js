import { Card, CardBody, CardTitle, CardSubTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const AnimeIndex = ({anime}) => {
    return (
        <>
      <div className="anime-body">
        <h1 className="index-title">Anime MockAPI</h1>
        <div className="flex-apartments">
          {anime.map((apartment, index) => {
            return (
              <Card
                style={{
                  width: "14rem",
                }}
                key={index}
              >
                <img alt={`apartment exterior view`} src={apartment.image} />
                <CardBody>
                  <CardTitle tag="h5">${apartment.price}/month</CardTitle>
                  <CardSubtitle>
                     {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <NavLink
                    to={`/apartmentshow/${apartment.id}`}
                    className="nav-link"
                  >
                    <Button className="apartment-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AnimeIndex