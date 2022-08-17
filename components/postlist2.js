import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import GetImage from "@utils/getImage";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@components/blog/category";
import ptBR from "date-fns/locale/pt-BR";

export default function PostList2({ post2, aspect, preloadImage }) {
  const imageProps = post2?.mainImage
    ? GetImage(post2.mainImage)
    : null;
  const AuthorimageProps = post2?.author?.image
    ? GetImage(post2.author.image)
    : null;
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}>
          <Link href={`/post/${post2.slug.current}`}>
            <a>
              {imageProps ? (
                <Image
                  src={imageProps.src}
                  loader={imageProps.loader}
                  blurDataURL={imageProps.blurDataURL}
                  alt={post2.mainImage.alt || "Thumbnail"}
                  placeholder="blur"
                  sizes="80vw"
                  //sizes="(max-width: 640px) 90vw, 480px"
                  layout="fill"
                  objectFit="cover"
                  priority={preloadImage ? true : false}
                  className="transition-all"
                />
              ) : (
                <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <PhotographIcon />
                </span>
              )}
            </a>
          </Link>
        </div>
        <CategoryLabel categories={post2.categories} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-gray-800">
          <Link href={`/post/${post2.slug.current}`}>
            <span>{post2.title}</span>
          </Link>
        </h2>

        <div className="hidden">
          {post2.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 line-clamp-3">
              <Link href={`/post/${post2.slug.current}`}>
                {post2.excerpt}
              </Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post2.author.image && (
                <Image
                  src={AuthorimageProps.src}
                  blurDataURL={AuthorimageProps.blurDataURL}
                  loader={AuthorimageProps.loader}
                  objectFit="cover"
                  layout="fill"
                  alt={post2?.author?.name}
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">{post2.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post2?.publishedAt || post2._createdAt}>
            {format(
              parseISO(post2?.publishedAt || post2._createdAt),
              "dd MMMM, yyyy",
              { locale: ptBR }
            )}
          </time>
        </div>
      </div>
    </>
  );
}
