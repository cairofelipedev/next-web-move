import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import {
  postquery,
  configQuery,
  destaques,
  destaques2,
  authorsquery,
  publi,
  publi2,
  publi3
} from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";
import DestaqueItem from "@components/destaqueitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Navigation, FreeMode, Scrollbar, Mousewheel } from "swiper";
import PostList2 from "@components/postlist2";
import PostList3 from "@components/postlist3";
import PubliCentral from "@components/PubliCentral";
import PubliTop from "@components/PubliTop";
import PubliRodape from "@components/PubliRodape";
import YoutubeEmbed from "@components/Youtube";
import Image from "next/image";

export default function Post(props) {
  const {
    postdata,
    siteconfig,
    preview,
    postdata2,
    postdata3,
    authors,
    publidata,
    publidata2,
    publidata3
  } = props;

  const router = useRouter();

  const { data: publiRodape } = usePreviewSubscription(publi3, {
    initialData: publidata3,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: publiTop } = usePreviewSubscription(publi2, {
    initialData: publidata2,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: publiCentral } = usePreviewSubscription(publi, {
    initialData: publidata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: posts3 } = usePreviewSubscription(destaques2, {
    initialData: postdata3,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: posts2 } = usePreviewSubscription(destaques, {
    initialData: postdata2,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });
  //console.log(posts);
  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : defaultOG.src;
  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <Container>
            {publiTop.map(publi2 => (
              <PubliTop
                key={publi2._id}
                publi2={publi2}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
            <div className="md:flex">
              <div className="md:w-2/3">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper">
                  {posts2.map(post2 => (
                    <SwiperSlide key={post2._id}>
                      <PostList2
                        post2={post2}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="md:w-1/3">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={25}
                  height={100}
                  direction={"vertical"}
                  freeMode={true} 
                  scrollbar={true}
                  mousewheel={true}
                  modules={[FreeMode, Scrollbar, Mousewheel]}
                  className="mySwiper">
                  {posts3.slice(0, 6).map(post3 => (
                    <SwiperSlide key={post3._id}>
                      <PostList3
                        post3={post3}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 pt-8">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            {publiCentral.map(publi => (
              <PubliCentral
                key={publi._id}
                publi={publi}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
            <div className="md:flex pt-6 pb-6">
              <div className="md:w-2/3">
                <YoutubeEmbed embedId="cOV3bz0HQmc" />
              </div>
              <div className="md:w-1/3 pt-8 md:pt-2">
                <h1 className="text-center text-2xl font-bold">
                  Colunistas
                </h1>
                {authors.slice(0, 3).map(author => {
                  const { width, height, ...imgprops } = GetImage(
                    author?.image
                  );
                  return (
                    <div
                      className="flex items-center gap-3 px-4 py-4"
                      key={author._id}>
                      <div className="relative flex-shrink-0 w-24 h-24">
                        <Image
                          {...imgprops}
                          objectFit="cover"
                          layout="fill"
                          alt={author.name || " "}
                          placeholder="blur"
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-xl text-gray-900">
                        {author.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {publiRodape.map(publi3 => (
              <PubliRodape
                key={publi3._id}
                publi3={publi3}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </Container>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const post2 = await getClient(preview).fetch(destaques);
  const post3 = await getClient(preview).fetch(destaques2);
  const publiCentral = await getClient(preview).fetch(publi);
  const publiTop = await getClient(preview).fetch(publi2);
  const publiRodape = await getClient(preview).fetch(publi3);
  const config = await getClient(preview).fetch(configQuery);
  const authors = await getClient(preview).fetch(authorsquery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      authors: authors,
      postdata: post,
      postdata2: post2,
      postdata3: post3,
      publidata: publiCentral,
      publidata2: publiTop,
      publidata3: publiRodape,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
