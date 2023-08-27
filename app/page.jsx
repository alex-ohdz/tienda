import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Link from 'next/link'
import ImageSlider from "@components/ImagenSlider.jsx";
import { SliderData } from "@components/SliderData.js";
import ResponsiveAppBar from "@components/navBar.jsx";
import Texto1 from "@components/Texto1.jsx";
import Cards from "@components/Cards.jsx";
import Footer from "@components/Footer";
import CarouselCard from "@components/CarouselCard.jsx";
import Texto2 from "@components/Texto2";

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

const offers = [
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  // Agrega más ofertas aquí
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  { title: 'Offer 1', description: 'Description for Offer 1', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg",},
  { title: 'Offer 2', description: 'Description for Offer 2', imageUrl: "https://img.freepik.com/premium-vector/hair-care-treatment-products_316839-4662.jpg", },
  // Agrega más ofertas aquí
  // Agrega más ofertas aquí
];

export default function Home() {
  return (
    <main>
      <ResponsiveAppBar />
      <ImageSlider slides={SliderData} />
      <Texto1 titulo={"¡Ofertas Especiales!"} description={"Descubre nuestras increíbles ofertas disponibles."}/>
      <CarouselCard  cards={offers} />
      <Texto2 titulo={"Nuestros Productos"} description={""}/>
      <Cards imagenes={imagenes}/>
      <Footer/>
      
      <Link href="/Ofertas" passHref>
        Contacto
      </Link>
    </main>
  );
}
