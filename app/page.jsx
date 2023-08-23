import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Button, IconButton } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ImageSlider from "@components/ImagenSlider.jsx";
import { SliderData } from "@components/SliderData.js";

export default function Home() {
  return (
    <main>
      <nav className="navegador">
        <IconButton
          className="navB"
          color="primary"
          aria-label="search"
          onClick={""}
        >
          <img src="\assets\icons\logo.png" alt="logo" width="50" height="50" />
        </IconButton>

        <Button variant="text">Hello world</Button>
        <div className="botones">
          <IconButton
            className="navB"
            color="primary"
            aria-label="search"
            onClick={""}
          >
            <SearchOutlinedIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <IconButton
            className="navB"
            color="primary"
            aria-label="buy_car"
            onClick={""}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <IconButton
            className="navB"
            color="primary"
            aria-label="client"
            onClick={""}
          >
            <AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </div>
      </nav>
      <ImageSlider slides={SliderData} />
    </main>
  );
}
