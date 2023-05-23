import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { TjTest } from "./TjTest";


const MyAnimeList = ({ anime }) => {
  const {selectedAnimeIds} = useContext(TjTest)

  console.log("List",selectedAnimeIds);

 if (!Array.isArray(selectedAnimeIds)) {
   return <div>No anime selected</div>;
 }


 const selectedAnime = anime?.filter(({ id }) => selectedAnimeIds.includes(id))


console.log("selectedAnime",selectedAnime)
 return (
  
   <div className="m-auto grid items-center grid-cols-3 justify-center">
     {selectedAnime.map(({ id, name, genres, synopsis }) => (
       <Card className="flex w-18rem mx-auto my-0" key={id}>
         <img alt="Sample" src="https://picsum.photos/300/200" />
         <CardBody>
           <CardTitle tag="h5">{name}</CardTitle>
           <CardSubtitle className="mb-2 text-muted" tag="h6">{genres}</CardSubtitle>
           <CardText>{synopsis}</CardText>
         </CardBody>
       </Card>
     ))}
   </div>
 );
 
};


export default MyAnimeList;
