import Image from "next/image";

interface PhotoPrincipalGroupType {
  title: string;
  src: string;
  href: string;
}

export interface PhotoFiveGroupType {
  principalPhoto: PhotoPrincipalGroupType;
  groupPhotos: PhotoPrincipalGroupType[];
}

const PhotoFiveGroup = ({
  principalPhoto,
  groupPhotos,
}: PhotoFiveGroupType) => {
  return (
    <section className="mb-8 container mx-auto px-2 lg:px-0">
      <div className="block lg:hidden">
        <a href={principalPhoto.href} className="relative mt-4 mb-2">
          <Image
            loading="lazy"
            className="max-h-[400px] w-full object-cover rounded-2xl"
            src={principalPhoto.src}
            width={400}
            height={400}
            alt={principalPhoto.title}
          />
          <div className="absolute bottom-6 px-4 w-max">
            <h5 className="text-white font-bold">{principalPhoto.title}</h5>
          </div>
        </a>

        <article className="grid grid-cols-2 gap-2 mt-2">
          {groupPhotos.map((photo, index) => (
            <a href={photo.href} className="relative">
              <Image
                loading="lazy"
                className="aspect-square w-full object-cover rounded-2xl"
                src={photo.src}
                width={400}
                height={400}
                alt={photo.title}
              />
              <div className="absolute bottom-4 px-4">
                <h5 className="text-white font-bold">{photo.title}</h5>
              </div>
            </a>
          ))}
        </article>
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-4">
        <a
          href={principalPhoto.href}
          className="relative row-span-3 col-span-2 pb-4"
        >
          <Image
            loading="lazy"
            className="w-full h-full object-cover aspect-square rounded-2xl"
            src={principalPhoto.src}
            width={400}
            height={400}
            alt={principalPhoto.title}
          />
          <div className="absolute bottom-8 px-4">
            <h5 className="text-white font-bold">{principalPhoto.title}</h5>
          </div>
        </a>

        {groupPhotos.map((photo, index) => (
          <a
            href={photo.href}
            className={`relative col-start-${(index+1) % 2 === 0 ? 4 : 3}`}
          >
            <Image
              loading="lazy"
              className="w-full h-full object-cover aspect-square rounded-2xl"
              src={photo.src}
              width={400}
              height={400}
              alt={photo.title}
            />
            <div className="absolute bottom-4 px-4">
              <h5 className="text-white font-bold">{photo.title}</h5>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PhotoFiveGroup;
