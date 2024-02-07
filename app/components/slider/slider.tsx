"use client";
import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import Logo from "../logos/logo";

export interface SliderType {
  title: string;
  text: string;
  children: ReactNode;
}
const Slider = ({ title, text, children }: SliderType) => {
  const maxScrollWidth = useRef(0);
  const carousel = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isAnchor, setIsAnchor] = useState(false);
  const [startX, setStartX] = useState(0);
  const draggableRef = useRef<any>(null);
  const articleRef = useRef<any>(null);
  const [isScrollingButton, setIsScrollingButton] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  const movePrev = () => {
    setIsScrollingButton(true);

    setPosition((currentPosition) => {
      // const sliderWidth = carousel.current.offsetWidth;
      // para saber el ancho del contenedor para quitar las flechas
      let newPosition = currentPosition - 150;
      if (-newPosition >= maxScrollWidth.current) {
        return -maxScrollWidth.current;
      }
      return newPosition;
    });
  };

  const moveNext = () => {
    setIsScrollingButton(true);

    setPosition((currentPosition) => {
      // const sliderWidth = carousel.current.offsetWidth;
      // para saber el ancho del contenedor para quitar las flechas
      let newPosition = currentPosition + 150;
      if (newPosition >= 0) {
        return 0;
      }
      return newPosition;
    });
  };

  const isDisabled = (direction: any) => {
    // if (direction === "prev") {
    //   return currentIndex <= 0;
    // }

    // if (direction === "next" && carousel.current !== null) {
    //   return (
    //     carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    //   );
    // }

    return false;
  };

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
      setShowArrows(maxScrollWidth.current > 0);
  }, [carousel.current]);



  const handleMouseDown = (e: any) => {
    setIsScrollingButton(false);
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    carousel.current.style.cursor = "grabbing";
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    const distance = e.clientX - startX;
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
          if (newPosition >= 0) {
            return 0;
          }
          if (-newPosition >= maxScrollWidth.current) {
            return -maxScrollWidth.current;
          }
          return newPosition;
        });
      }
    },
    [isDragging]
  );

  const handleTouchStart = (e: any) => {
    setIsScrollingButton(false);
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    carousel.current.style.cursor = "grabbing";
  };
  const handleTouchMove = (e: any) => {
    const touchCoordinate = e.touches[0].clientX;
    setPosition((currentPosition) => {
      // const sliderWidth = carousel.current.offsetWidth;
      // para saber el ancho del contenedor para quitar las flechas
      let newPosition = currentPosition + (touchCoordinate - startX);
      if (newPosition >= 0) {
        setStartX(0);
        return 0;
      }
      if (-newPosition >= maxScrollWidth.current) {
        setStartX(-newPosition);
        return -maxScrollWidth.current;
      }
      setStartX(touchCoordinate);
      return newPosition;
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const anchorHandle = (e: any) => {
    if (!isAnchor) {
      e.preventDefault(); // Prevent the anchor tag from navigating if dragging has occurred
    }
  };

  console.log('server',"position", position, "maxScrollWidth", maxScrollWidth.current);

  return (
    <>
      <div className="lg:my-12">
        <section className="mt-8 container mx-auto px-2 lg:flex lg:justify-between lg:items-center">
          <div className="lg:max-w-[60%] mx-2 lg:mx-0">
            <h3 className="text-2xl font-pt font-bold mb-2 text-black">
              {title}
            </h3>
            <p className="text-black">{text}</p>
          </div>

          <div className="hidden lg:block mb-2  relative w-[100px] h-[60px]">
            {(maxScrollWidth.current > -position || maxScrollWidth.current === 0) && showArrows && (
              <button
                onClick={movePrev}
                disabled={isDisabled("prev")}
                id="splide-carousel-1--previous-btn"
                className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5 mr-2 absolute left-1 top-0"
                type="button"
                aria-label="Next slide"
                aria-controls="splide04-track"
              >
                <img
                  src="https://www.visitlamassana.ad/img/arrow-slider.svg"
                  className="w-auto h-4 w-full relative"
                />
              </button>
            )}
            {position < 0 && showArrows &&(
              <button
                disabled={isDisabled("next")}
                onClick={moveNext}
                id="splide-carousel-1--next-btn"
                className="border border-gray-5 py-3 px-4 rounded-full hover:bg-gray-5 absolute right-1 top-0 "
                type="button"
                aria-label="Next slide"
                aria-controls="splide04-track"
              >
                <img
                  src="https://www.visitlamassana.ad/img/arrow-slider.svg"
                  className="w-auto h-4 w-full rotate-180 relative"
                />
              </button>
            )}
          </div>
        </section>

        <section className="mb-8 lg:max-w-full mx-auto ">
          <article
            ref={carousel}
            className="my-2 is-initialized is-active mx-2 overflow-hidden scroll-smooth cursor-grab"
          >
            <div
              className="relative container gap-1  w-100 z-0 mx-auto scroll-smooth  "
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                onClick={anchorHandle}
                ref={draggableRef}
                className="flex scroll-smooth "
                style={{
                  transform: `translateX(${position}px)`,
                  transition: `${
                    isScrollingButton ? "transform 0.5s ease-in-out" : ""
                  }`,
                }}
              >
                {children}
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Slider;
