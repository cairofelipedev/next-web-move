import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import GetImage from "@utils/getImage";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@components/blog/category";
import ptBR from "date-fns/locale/pt-BR";
import styles from "@css/style.module.scss"

export default function PostList3({ post3, aspect, preloadImage }) {
  const AuthorimageProps = post3?.author?.image
    ? GetImage(post3.author.image)
    : null;
  return (
    <>
      <div className={styles.bodyPost3}>
          <Link href={`/post/${post3.slug.current}`}>
            {post3.title}
          </Link>
      </div>
    </>
  );
}
