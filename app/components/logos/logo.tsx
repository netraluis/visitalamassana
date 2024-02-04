import Image from "next/image";
import { LogoType } from "./logoType";

const Logo = (props: LogoType) => {
  return (
  <a
  // onClick={handleClick}
    href={props.href}
    // className="relative mt-4 is-active is-visible border snap-center"
    style={{ marginRight: "10px", 
    // width: '100px'
    // width: "calc(16.6667% - 18.33333px)" 
  }}
  >
    <Image
    draggable="false"
      alt={props.alt}
      width={200}
      height={200}
      loading="lazy"
      className=" object-cover aspect-square rounded-2xl border"
      src={props.src}
      // sizes="(min-width: 808px)"
      style={{ minWidth: "200px",height: '200px'  }}
    />

    <h5 className="mt-2 flex items-center elip text-black">{props.text}</h5>
  </a>
)};

export default Logo;
