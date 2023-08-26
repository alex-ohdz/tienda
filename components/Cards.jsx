import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Tarjeta = ({ imageUrl, index }) => (
  <Card>
    <CardActionArea className="cardBody">
      <CardMedia className="cardImg" component="img" image={imageUrl} />
      <CardContent>
        <Typography gutterBottom component="div">
          Image {index + 1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description for Image {index + 1}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default function ActionAreaCard({imagenes}) {
  return (
   
    <div className="cards">
      {imagenes.map((imageUrl, index) => (
        <Tarjeta
          key={index}
          imageUrl={imageUrl}
          index={index}
        />
      ))}
    </div>
  );
}
