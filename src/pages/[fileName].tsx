import Meta from "@/components/Meta";
import PostBody from "@/components/Post/Body";
import PostFooter from "@/components/Post/Footer";
import PostHeader from "@/components/Post/Header";
import { getPost, getPostsFileName } from "@/libs/posts";
import { IPost } from "@/types/posts";

interface IPostDetailPageProps {
  post: IPost;
}

function PostDetailPage({ post }: IPostDetailPageProps) {
  const { title, category, date, content } = post;

  return (
    <>
      <Meta title={title} ogTitle={title} />
      <div className="pt-8">
        <PostHeader title={title} category={category} date={date} />
        <PostBody content={content} />
        <PostFooter />
      </div>
    </>
  );
}

export default PostDetailPage;

export async function getStaticPaths() {
  const paths = getPostsFileName();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { fileName: string };
}) {
  const post = await getPost(params.fileName);

  return {
    props: {
      post,
    },
  };
}
