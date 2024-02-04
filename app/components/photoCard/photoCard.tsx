import { PhotoCardType } from "./photoCardType";
import Image from "next/image";

const PhotoCard = ({ typeActivity, text, src, href }: PhotoCardType) => (
  <a
    href={href}
    className="relative mt-4 is-active is-visible"
    id="splide02-slide01"
    role="group"
    aria-roledescription="slide"
    aria-label="1 of 10"
    style={{ marginRight: "10px", width: "300px" }}
  >
    <Image
      loading="lazy"
      className=" w-[360px] h-[360px] w-full object-cover rounded-2xl"
      src={src}
      width={300}
      height={360}
      alt=''
      style={{ minWidth: "220px"  }}
    />

    <div className="absolute top-4 left-4 rounded-xl bg-black bg-opacity-40 py-2 px-4 text-sm text-white">
      {typeActivity}
    </div>

    <div className="absolute h-[60px] w-full bottom-0 bg-gradient-to-t from-black/40 rounded-b-2xl flex items-start px-4 ">
      <h5 className="text-white font-bold">{text}</h5>
    </div>
  </a>
);

export default PhotoCard;
