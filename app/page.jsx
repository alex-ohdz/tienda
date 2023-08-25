import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ImageSlider from "@components/ImagenSlider.jsx";
import { SliderData } from "@components/SliderData.js";
import ResponsiveAppBar from "@components/navBar.jsx";
import Cards from "@components/Cards.jsx";
import Footer from "@components/Footer";


export default function Home() {
  return (
    <main>
      <ResponsiveAppBar />
      <ImageSlider slides={SliderData} />
      <Cards />
      <Footer/>
    </main>
  );
}
