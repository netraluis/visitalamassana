"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Logo from "../logos/logo";

// Data
// import data from './data.json';
// {
//   href: "/tracks",
//   src: "https://d58uieioun6fz.cloudfront.net/thumbnails/Pages/Explore/Images/Senderisme-600.jpg",
//   alt: "senderisme-600",
//   text: "Senderismo",
// },
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
    console.log("handleMouseDown", e.movementX, e.clientX);
    setIsDragging(true);
    setStartX(e.clientX);
    carousel.current.style.cursor = "grabbing";
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    const currentX = e.clientX;
    const distance = currentX - startX;
    console.log("handleMouseUp", { currentX, startX, distance });
    if (Math.abs(distance) < 10) {
      // console.log('isAnchor', isAnchor);
      return setIsAnchor(true);
    }
    setIsAnchor(false);
    carousel.current.style.cursor = "grab";
  };

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging) {
        setPosition((currentPosition) => {
          let newPosition = currentPosition + e.movementX;
          return newPosition;
        });
      }
    },
    [isDragging]
  );

  return (
    <div className="carousel my-12">
      {/* <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Our epic carousel
      </h2> */}
      <div className="relative ">
        <div className="flex flex-nowrap justify-between absolute top left ">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="relative gap-1 overflow-hidden scroll-smooth cursor-grab w-100 z-0"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
          // style={{ transform: `translateX(${position}px)` }}
        >
          <div
            className="flex "
            style={{ transform: `translateX(${position}px)` }}
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
      </div>
    </div>
  );
};

export default Carousel;
