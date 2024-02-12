const SquareImageOutSideText = (props: any) => {
  return (
    <a
      href="https://www.visitlamassana.ad/es/pois/esglesia-sant-antoni-grella"
      className="relative mt-4 splide__slide is-active is-visible"
      id="splide08-slide01"
      role="group"
      aria-roledescription="slide"
      aria-label="1 of 9"
      style={{ marginRight: "10px", width: "calc(25% - 7.5px)" }}
    >
      <div className="map-image-card p-1">
        <img
          src="https://d58uieioun6fz.cloudfront.net/thumbnails/Pois/0f52ee68-87fd-411c-ae23-91975152d84a/DJI_0173-600.jpg"
          className="rounded-xl aspect-square max-h-[400px] w-full object-cover"
        />
        <div className="px-2 text-black">
          <h4 className="font-bold text-lg my-2">
            Església Sant Antoni de la Grella
          </h4>
          <div className="flex items-center my-2 group cursor-pointer">
            <img className="w-6 h-6" src="https://www.visitlamassana.ad/img/culturalHeritage.png" alt="" />
            <span className="pl-2 group-hover:bg-gray-6">
              Patrimonio Cultural <span> · </span>
              Iglesia
            </span>
          </div>
          <p className="text-gray-1 text-sm mt-4">
            Edifici adossat a la roca de les gorges del riu Valira d’Orient.
            Capella d’origen romànic, reconstru...
          </p>
        </div>
      </div>
    </a>
  );
};

export default SquareImageOutSideText;
