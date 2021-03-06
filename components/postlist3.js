import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import GetImage from "@utils/getImage";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@components/blog/category";
import ptBR from "date-fns/locale/pt-BR";

export default function PostList3({ post3, aspect, preloadImage }) {
  const AuthorimageProps = post3?.author?.image
    ? GetImage(post3.author.image)
    : null;
  return (
    <>
      <div className="cursor-pointer group ml-3">
        <CategoryLabel categories={post3.categories} />
        <h2 className="text-xl font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/post/${post3.slug.current}`}>
            <span
              className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {post3.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {post3.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/post/${post3.slug.current}`}>
                {post3.excerpt}
              </Link>
            </p>
          )}
        </div>

        <div className="space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post3.author.image && (
                <Image
                  src={AuthorimageProps.src}
                  blurDataURL={AuthorimageProps.blurDataURL}
                  loader={AuthorimageProps.loader}
                  objectFit="cover"
                  layout="fill"
                  alt={post3?.author?.name}
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">{post3.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post3?.publishedAt || post3._createdAt}>
            {format(
              parseISO(post3?.publishedAt || post3._createdAt),
              "dd MMMM, yyyy",
              { locale: ptBR }
            )}
          </time>
        </div>
      </div>
    </>
  );
}
