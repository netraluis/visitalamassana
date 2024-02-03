import Logo from "./components/logos/logo";
import Slider from "./components/slider/slider";
import Carousel from "./components/slider/slider";
import VideoCover100 from "./components/videoCover100/videoCover100";

export default function Home() {
  return (
    <>
      <div className="h-full lg:h-screen overflow-auto border bg-white">
        <VideoCover100
          text="Descubre rutas y puntos de interés de la Massana"
          buttonText="Ver las rutas"
          poster="https://d58uieioun6fz.cloudfront.net/thumbnails/Explorer/Video/header-1900.jpg"
          src="https://d58uieioun6fz.cloudfront.net/Explorer/Video/header.mp4"
        />
      {/* <Logo/> */}
      {/* <Slider/> */}
      <Carousel/>
      </div>
    </>
  );
}
