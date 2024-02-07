import Logo from "./components/logos/logo";
import PhotoCard from "./components/photoCard/photoCard";
import PhotoFiveGroup, { PhotoFiveGroupType } from "./components/photoFiveGroup/photoFiveGroup";
import Slider from "./components/slider/slider";

import VideoCover100 from "./components/videoCover100/videoCover100";

const photoCard = [
  {
    typeActivity: "Activitat",
    text: "Bosc dels Menairons - Macarulla",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Routes/MONT69/Waypoints/426-Còpia de IMG_1101-600.jpg",
    href: "/tracks/MONT69",
  },
  {
    typeActivity: "Activitat",
    text: "Troba els Tamarros - El Massa",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/71bab5fd-9152-426a-84ad-93c9e9c0002c/DSC00648-600.jpg",
    href: "/pois/tamarro-massa",
  },
  {
    typeActivity: "Activitat",
    text: "Salva la Serenalla",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/65b1bf44-0ff9-49c4-b6d9-6990122c1af6/DSC08948-600.jpg",
    href: "/pois/salva-la-serenalla",
  },
  {
    typeActivity: "Museu, Patrimoni Cultural",
    text: "La Massana Còmic",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/b52ec6c2-de3a-441c-aa7d-6709eff8610b/DSC00272-600.jpg",
    href: "/pois/museu-comic",
  },
  {
    typeActivity: "Senderisme",
    text: "Camí Ral de la Massana",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Routes/MONT113/Waypoints/439-IMG_2958-600.jpg",
    href: "/tracks/MONT113",
  },
  {
    typeActivity: "Llac, Patrimoni Natural",
    text: "Estany de les Truites",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/ec4929ee-b936-43a9-b734-670a2ba8fa14/DJI_0307-600.jpg",
    href: "/pois/estany-truites",
  },
  {
    typeActivity: "Berenador",
    text: "Berenador de Beixalís",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/9150d528-4579-4ff4-88c6-fa65c20233e0/DSC07933-600.jpg",
    href: "/pois/berques-arinsal",
  },
  {
    typeActivity: "Equipament Esportiu",
    text: "Les Berques d’Arinsal",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/6c18ec37-37f4-4896-b52f-424ec01de700/DJI_0539-600.jpg",
    href: "/pois/berques-arinsal",
  },
  {
    typeActivity: "Activitat",
    text: "Escapeland La Massana",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/a4020a5c-ee22-4477-ae25-4fcb0b666ffe/DSC02513-600.jpg",
    href: "/pois/escapeland-la-massana",
  },
  {
    typeActivity: "Activitat",
    text: "Escape Els Passadors",
    src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/926752df-166c-45fd-b7a1-71293e07feae/DSC08748-600.jpg",
    href: "/pois/escape-els-passadors" 
  }
  
];

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

const firtsPhotoFiveGroup: PhotoFiveGroupType = {
  // photoFiveGroup: {
    principalPhoto: {
      title: "Escapeland La Massana",
      src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/a4020a5c-ee22-4477-ae25-4fcb0b666ffe/DSC02513-1900.jpg",
      href: "/pois/escapeland-la-massana"
    },
    groupPhotos: [
      {
        title: "Escape Els Passadors",
        src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/926752df-166c-45fd-b7a1-71293e07feae/DSC08748-600.jpg",
        href:"/pois/escape-els-passadors"
      },
      {
        title: "Escape Borís I, Rei d'Andorra",
        src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/f79167af-bc79-4c64-9871-3c592801225c/DSC08831-600.jpg",
        href:"/pois/escape-rei-boris"
      },
      {
        title: "Banys de Bosc",
        src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/5a07639c-9f6f-4159-bc01-61603c8a56b9/DSC08391-600.jpg",
        href:"/pois/banys-de-bosc"
      },
      {
        title: "Spa & Wellness",
        src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/6323cdb8-705e-4b6a-aa01-c3ed44c76bfe/DSC08636-600.jpg",
        href:"/pois/spa-wellness"
      },
    ],
  // }
};

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

        <Slider
          title="Diversión en familia"
          text="La Massana es el destino idóneo para realizar salidas y actividades con niños durante todo el año. Ya sea disfrutando de la naturaleza y los paisajes que nos rodean."
        >
          {photoCard.map((photoCard, index) => {
            return (
              <PhotoCard
                key={index}
                href={photoCard.href}
                src={photoCard.src}
                // alt={logo.alt}
                text={photoCard.text}
                typeActivity={photoCard.typeActivity}
              />
            );
          })}
        </Slider>

        <Slider title='Experiencias' text='Os proponemos juegos y recorridos temáticos de distintos niveles de dificultad para redescubrir la parroquia de la Massana. ¡Se puede hacer en familia, con los amigos y en pareja! Todos los juegos de escapegame en el exterior, se inspiran en hechos reales. Además, disfruta de la naturaleza y relájate con los baños de bosque.'>
          <PhotoFiveGroup   principalPhoto={firtsPhotoFiveGroup.principalPhoto} groupPhotos={firtsPhotoFiveGroup.groupPhotos} />
        </Slider>
      </div>
    </>
  );
}
