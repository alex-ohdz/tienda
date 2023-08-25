import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const imagenes = [
  "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.imgcache.rev.web.1914.1100.jpg",
  "https://img.freepik.com/premium-vector/set-combs-hair-care-items-vector-illustration_324395-107.jpg?w=2000",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
  "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",
];

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

export default function ActionAreaCard() {
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
