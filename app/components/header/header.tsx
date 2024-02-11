"use client";
import { useEffect, useRef, useState } from "react";
import {
  Bars3Icon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  MapIcon,
  UserPlusIcon,
  UserIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Rutas y puntos de interés",
    description: "Get a better understanding of your traffic",
    href: "https://www.visitlamassana.ad/es/tracks",
    icon: MapIcon,
  },
  {
    name: "Agenda y eventos",
    description: "Speak directly to your customers",
    href: "https://www.visitlamassana.ad/es/agenda",
    icon: CalendarIcon,
  },
  {
    name: "Actividades",
    description: "Your customers' data will be safe and secure",
    href: "https://booking.visitlamassana.ad/",
    icon: ListBulletIcon,
  },
  {
    name: "Información de interés",
    description: "Connect with third-party tools",
    href: "https://www.visitlamassana.ad/es/information",
    icon: InformationCircleIcon,
  },
  {
    name: "Contacto",
    description: "Build strategic funnels that will convert",
    href: "https://www.visitlamassana.ad/es/contact",
    icon: ChatBubbleLeftRightIcon,
  },
];
const callsToAction = [
  { name: "Registrarse", href: "#", icon: UserPlusIcon },
  { name: "Iniciar Sesión", href: "#", icon: UserIcon },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Función para verificar si el clic fue fuera del ref (dropdownRef)
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    // Agregar el event listener cuando el componente se monta
    console.log({ isVisible });
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const toggleMenu = (event: React.MouseEvent) => {
    // event.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <header className="px-3 mx-auto flex lg:grid lg:grid-cols-3 lg:justify-between items-center py-4 sticky top-0 border-b border-b-gray-6 bg-white z-50">
      <div>
        <a href="https://www.visitlamassana.ad/es" className="contents w-auto">
          <img src="https://www.visitlamassana.ad/img/lamassana/icon.svg" className="block lg:hidden w-6" />
          <img
            className="hidden lg:block h-10"
            src="https://www.visitlamassana.ad/img/lamassana/logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="relative w-full">
        <div
          className="rounded-full w-11/12 lg:w-full mx-auto border border-[#E5E5EA] hover:border-black p-1 flex items-center"
          id="shadowFocusSearch"
        >
          <input
            id="search"
            type="search"
            className="w-full py-0 border-0 focus:ring-0"
            placeholder="Cerca per categoria, ruta o punt d’interès"
          />
          <button className="rounded-full bg-cyan-400 hover:bg-cyan-400 p-2 border">
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="searchBox"
          className="absolute hidden border inset-x-0 top-16 bg-white rounded-[16px] w-[97vw] left-[-1.8em] lg:left-0 lg:w-full mx-auto p-6 h-fit z-[51] lg:z-[11] max-h-[400px] overflow-y-scroll"
        >
          <p className="text-center">No s’ha trobat cap resultat</p>
        </div>
      </div>
      <div className="justify-self-end lg:p-3 flex items-center">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="border border-[#E5E5EA] hover:border-black hover:bg-red rounded-full font-medium flex items-center py-2.5 px-4 !lg:p-0"
        >
          <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
        </button>

        {isVisible && (
          <div className="relative" ref={dropdownRef}>
            <div className="absolute right-0 z-10 mt-5 flex w-screen max-w-max px-4 top-1">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 font-semibold  text-gray-900  hover:bg-gray-100 hover:text-cyan-500"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400 "
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-cyan-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
