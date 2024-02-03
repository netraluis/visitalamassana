"use client";
import { useState, useRef, useEffect, useCallback, use } from "react";
import Logo from "../logos/logo";

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

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isAnchor, setIsAnchor] = useState(false);
  const [startX, setStartX] = useState(0);
  const draggableRef = useRef<any>(null);
  const articleRef = useRef<any>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);


  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    carousel.current.style.cursor = "grabbing";
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    const distance = e.clientX  - startX;
    if (Math.abs(distance) < 10) {
      return setIsAnchor(true);
    }
    setIsAnchor(false);
    carousel.current.style.cursor = "grab";
  };

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging) {
        setPosition((currentPosition) => {
          // const sliderWidth = carousel.current.offsetWidth;
          // para saber el ancho del contenedor para quitar las flechas
          let newPosition = currentPosition + e.movementX;
          if (newPosition > 0) {
            return 0;
          }
          if (-newPosition > maxScrollWidth.current) {
            return -maxScrollWidth.current;
          }
          return newPosition;
        });
      }
    },
    [isDragging]
  );

  const handleTouchStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    carousel.current.style.cursor = "grabbing";
  };
  const handleTouchMove = (e:any) => {
    const touchCoordinate = e.touches[0].clientX;
    setPosition((currentPosition) => {
      // const sliderWidth = carousel.current.offsetWidth;
      // para saber el ancho del contenedor para quitar las flechas
      let newPosition = currentPosition + (touchCoordinate - startX);
      if (newPosition > 0) {
        setStartX(0)
        return 0;
      }
      if (-newPosition > maxScrollWidth.current) {
        setStartX(-newPosition)
        return -maxScrollWidth.current;
      }
      setStartX(touchCoordinate)
      return newPosition;
    });
  };

  const handleTouchEnd = (e: any) => {
    setIsDragging(false);
  }

  return (
    <>
      <div className="lg:my-12">
        <section className="mt-8 container mx-auto px-2 lg:flex lg:justify-between lg:items-center">
          <div className="lg:max-w-[60%] mx-2 lg:mx-0">
            <h3 className="text-2xl font-pt font-bold mb-2 text-black">
              Qué hacer en la Massana
            </h3>
            <p></p>
          </div>

          <div className="hidden lg:block mb-2">
            <button
              onClick={movePrev}
              disabled={isDisabled("prev")}
              id="splide-carousel-1--previous-btn"
              className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5 mr-2"
              type="button"
              aria-label="Next slide"
              aria-controls="splide04-track"
            >
              <img
                src="https://www.visitlamassana.ad/img/arrow-slider.svg"
                className="w-auto h-4 w-full"
              />
            </button>
            <button
              disabled={isDisabled("next")}
              onClick={moveNext}
              id="splide-carousel-1--next-btn"
              className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5"
              type="button"
              aria-label="Next slide"
              aria-controls="splide04-track"
            >
              <img
                src="https://www.visitlamassana.ad/img/arrow-slider.svg"
                className="w-auto h-4 w-full rotate-180"
              />
            </button>
          </div>
        </section>

        <section className="mb-8 container lg:max-w-full mx-auto px-2">
          <article ref={articleRef} className="my-2 is-initialized is-active">
            <div
              ref={carousel}
              className="relative gap-1 overflow-hidden scroll-smooth cursor-grab w-100 z-0"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={draggableRef}
                className="flex "
                style={{ transform: `translateX(${position}px)`}}
              >
                {logos.map((logo, index) => {
                  return (
                    <Logo
                      key={index}
                      href={logo.href}
                      src={logo.src}
                      alt={logo.alt}
                      text={logo.text}
                      isAnchor={isAnchor}
                    />
                  );
                })}
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Carousel;
