import PostCard from "@/components/ui/postCard";
import { IPostMetaData } from "@/types/posts";
import Link from "next/link";
import Pagination from "../ui/pagination";
import { IPagination } from "@/types/common";

interface IPostListsProps extends IPagination {
  posts: IPostMetaData[];
}

function PostLists({ posts, ...props }: IPostListsProps) {
  return (
    <>
      <div className="flex flex-col gap-10 mb-8">
        {posts.map((post) => (
          <Link href={`/${post.fileName}`} key={post.title}>
            <PostCard
              title={post.title}
              category={post.category}
              date={post.date}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default PostLists;