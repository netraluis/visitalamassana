import Logo from "../logos/logo";
import Image from "next/image";

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

const Slider = (props: any) => (
  <div className="lg:my-12">
    <section className="mt-8 container mx-auto px-2 lg:flex lg:justify-between lg:items-center">
      <div className="lg:max-w-[60%] mx-2 lg:mx-0">
        <h3 className="text-2xl font-pt font-bold mb-2 text-black">
          Qué hacer en la Massana
        </h3>
        <p></p>
      </div>

      <div className="hidden lg:block">
        <button
          id="splide-carousel-1--previous-btn"
          className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5 mr-2"
          type="button"
          aria-label="Next slide"
          aria-controls="splide04-track"
        >
          <Image
            alt="left arrow"
            width={100}
            height={100}
            src="https://www.visitlamassana.ad/img/arrow-slider.svg"
            className="w-auto h-4 w-full"
          />
        </button>
        <button
          id="splide-carousel-1--next-btn"
          className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5"
          type="button"
          aria-label="Next slide"
          aria-controls="splide04-track"
        >
          <Image
            alt="right arrow"
            width={100}
            height={100}
            src="https://www.visitlamassana.ad/img/arrow-slider.svg"
            className="w-auto h-4 w-full rotate-180"
          />
        </button>
      </div>
    </section>
    <section className="mb-8 container lg:max-w-full mx-auto px-2">
      <article
        className="my-2 splide splide-carousel-small splide-carousel-small-1 is-initialized splide--slide splide--ltr splide--draggable is-active"
        id="splide01"
        role="region"
        aria-roledescription="carousel"
      >
        <div
          className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
          id="splide01-track"
          style={{ paddingLeft: "0px", paddingRight: "30px" }}
          aria-live="polite"
          aria-atomic="true"
        >
          <ul
            className="splide__list"
            id="splide01-list"
            role="presentation"
            style={{ transform: "translateX(0px)" }}
          >
            {/* {logos.map((logo, index) =>{ 
                console.log(logo)
            return <Logo key={index} href={logo.href} src={logo.src} alt={logo.alt}/>})} */}
            {/* <li className="splide__slide">
              <Logo
                href="/tracks"
                src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Senderisme-600.jpg"
                alt="senderisme-600"
                text="Senderismo"
              />
            </li>
            <li className="splide__slide">
              <Logo
                href="/tracks"
                src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Senderisme-600.jpg"
                alt="senderisme-600"
                text="Senderismo"
              /> */}
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
);

export default Slider;

{
  /* <a href="/tracks" className="relative mt-4 splide__slide is-active is-visible" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Senderisme-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Senderismo
</h5>
</a>
<a href="/cicloturisme" className="relative mt-4 splide__slide is-visible is-next" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Cicloturisme-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Cicloturismo
</h5>
</a>
<a href="/tracks" className="relative mt-4 splide__slide is-visible" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/PuntsInteres-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Puntos de interés
</h5>
</a>
<a href="https://booking.visitlamassana.ad" className="relative mt-4 splide__slide is-visible" id="splide01-slide04" role="group" aria-roledescription="slide" aria-label="4 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Botiga-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Actividades
</h5>
</a>
<a href="/agenda" className="relative mt-4 splide__slide is-visible" id="splide01-slide05" role="group" aria-roledescription="slide" aria-label="5 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Esdeveniments-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Agenda
</h5>
</a>
<a href="/astroturisme" className="relative mt-4 splide__slide is-visible" id="splide01-slide06" role="group" aria-roledescription="slide" aria-label="6 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/AstroturismeIcon-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Astroturismo
</h5>
</a>
<a href="/gastronomia" className="relative mt-4 splide__slide" id="splide01-slide07" role="group" aria-roledescription="slide" aria-label="7 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);" aria-hidden="true">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Gastronimia-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    Gastronomía
</h5>
</a>
<a href="/laserenallamarket" className="relative mt-4 splide__slide" id="splide01-slide08" role="group" aria-roledescription="slide" aria-label="8 of 8" style="margin-right: 10px; width: calc(16.6667% - 8.33333px);" aria-hidden="true">
<img loading="lazy" className="w-auto object-cover lg:aspect-square rounded-2xl" src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/laSerenalla-600.jpg">

<h5 className="mt-2 flex items-center elip">
                    La Serenalla Market
</h5>
</a> */
}

<article
  className="my-2 splide splide-carousel-small splide-carousel-small-1 is-initialized splide--slide splide--ltr splide--draggable is-active"
  id="splide01"
  role="region"
  aria-roledescription="carousel"
>
  <div
    className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
    id="splide01-track"
    style={{ paddingLeft: "0px", paddingRight: "30px" }}
    aria-live="polite"
    aria-atomic="true"
  ></div>
</article>;
