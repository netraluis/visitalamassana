import { VideoCover100Type } from "./videoCover100Type";


const VideoCover100 = ({poster, src, text, buttonText}: VideoCover100Type) => (
  <div className="lg:my-12">
    <section>
      <div className="relative container mx-auto px-2">
        <video
          className="h-[520px] object-cover rounded-2xl lg:w-full"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source
            src={src}
            type="video/mp4"
          />
          Su navegador no admite la etiqueta de vídeo{" "}
        </video>

        <div className="absolute bottom-6 px-4 lg:bottom-8 lg:left-8 lg:w-6/12">
          <h3 className="text-white text-3xl lg:text-[44px] leading-[34px] lg:leading-[56px] font-black">
            {text}
          </h3>
          <a
            href="/tracks"
            className="bg-white rounded-full py-2 mt-4 cursor-pointer px-8 flex items-center justify-left w-fit"
          >
            <span className="text-sm text-black">{buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default VideoCover100;
