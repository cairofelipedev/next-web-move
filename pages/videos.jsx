import Container from "@components/container";
import Layout from "@components/layout";
import { videosyoutube, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import YoutubeEmbed from "@components/Youtube";

export default function Videos({ videos, siteconfig }) {
  return (
    <Layout {...siteconfig}>
      <Container>
        <div className="md:flex">
          {videos.map(video => {
            return (
              <div className="md:w-1/2 p-5" key={video._id}>
                 <YoutubeEmbed embedId={video.valor}/>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const videos = await getClient(preview).fetch(videosyoutube);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      videos: videos,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
