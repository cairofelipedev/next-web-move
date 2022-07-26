import Image from "next/image";
import GetImage from "@utils/getImage";

export default function DestaqueItem({ destaques, preloadImage }) {
  const imageProps = destaques?.mainImage
    ? GetImage(destaques.mainImage)
    : null;
  return (
    <>
      {imageProps ? (
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          blurDataURL={imageProps.blurDataURL}
          alt={destaques.mainImage.alt || "Thumbnail"}
          placeholder="blur"
          layout="fill"
          priority={preloadImage ? true : false}
          className="transition-all"
        />
      ) : (
        <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></span>
      )}
    </>
  );
}
