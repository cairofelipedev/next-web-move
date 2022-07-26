import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import { postquery, configQuery, destaques } from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";
import DestaqueItem from "@components/destaqueitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "@css/style.module.css";
import PostList2 from "@components/postlist2";

export default function Post(props) {
  const { postdata, siteconfig, preview, postdata2 } = props;

  const router = useRouter();

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
            <p className="text-center">Publicidade</p>
            <div className="relative flex flex-col justify-center overflow-hidden bg-white py-6 sm:py-4">
              <div className="mx-auto w-full rounded bg-[#BFBFBF] p-20 text-center"></div>
            </div>
            <div className="flex">
              <div className="w-2/3">
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
              <div className="w-1/3">
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
            </div>
            {/* {posts2.map(item => (
              <div key={item.id}>
                <DestaqueItem destaques={item} />
              </div>
            ))} */}
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
            <p className="text-center">Publicidade</p>
            <div className="relative flex flex-col justify-center overflow-hidden bg-white py-6 sm:py-4">
              <div className="mx-auto w-full rounded bg-[#BFBFBF] p-20 text-center"></div>
            </div>
          </Container>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const post2 = await getClient(preview).fetch(destaques);
  const config = await getClient(preview).fetch(configQuery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      postdata: post,
      postdata2: post2,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
