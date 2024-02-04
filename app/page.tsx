import Logo from "./components/logos/logo";
import Slider from "./components/slider/slider";

import VideoCover100 from "./components/videoCover100/videoCover100";

const logos = [
  {
    href: "/tracks",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Senderisme-600.jpg",
    alt: "senderisme-600",
    text: "Senderismo",
  },
  {
    href: "/cicloturisme",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Cicloturisme-600.jpg",
    alt: "cicloturisme-600",
    text: "Cicloturismo",
  },
  {
    href: "/tracks",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/PuntsInteres-600.jpg",
    alt: "puntsInteres-600",
    text: "Puntos de interés",
  },
  {
    href: "https://booking.visitlamassana.ad",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Botiga-600.jpg",
    alt: "botiga-600",
    text: "Actividades",
  },
  {
    href: "/agenda",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Esdeveniments-600.jpg",
    alt: "esdeveniments-600",
    text: "Agenda",
  },
  {
    href: "/astroturisme",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/AstroturismeIcon-600.jpg",
    alt: "astroturismeIcon-600",
    text: "Astroturismo",
  },
  {
    href: "/gastronomia",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Gastronimia-600.jpg",
    alt: "gastronimia-600",
    text: "Gastronomía",
  },
  {
    href: "/laserenallamarket",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/laSerenalla-600.jpg",
    alt: "laSerenalla-600",
    text: "La Serenalla Market",
  },
];

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
        <Slider title="Qué hacer en la Massana" text="">
          {logos.map((logo, index) => {
            return (
              <Logo
                key={index}
                href={logo.href}
                src={logo.src}
                alt={logo.alt}
                text={logo.text}

              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
