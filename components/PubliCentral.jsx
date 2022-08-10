import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import GetImage from "@utils/getImage";
import { PhotographIcon } from "@heroicons/react/outline";

export default function PublicidadeCentra({
  publi,
  aspect,
  preloadImage
}) {
  const imageProps = publi?.image ? GetImage(publi.image) : null;
  return (
    <>
      <div>
        <p className="text-center">Publicidade</p>
        <Link href="#">
          {imageProps ? (
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              blurDataURL={imageProps.blurDataURL}
              alt={publi.image.alt || "Thumbnail"}
              width={1500}
              height={200}
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <PhotographIcon />
            </span>
          )}
        </Link>
      </div>
    </>
  );
}
