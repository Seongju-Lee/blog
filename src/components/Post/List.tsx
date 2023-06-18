import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AllPostsData } from '@/lib/type';

interface ListProps {
  posts: AllPostsData[];
}

const List = ({ posts }: ListProps) => {
  return (
    // <div className="px-4 flex flex-col gap-5 cursor-pointer">
    //   {posts.map((post) => (
    //     <Link href={`/post/${post.category}/${post.id}`} key={post.id}>
    //       <h1 className="text-2xl">{post.title}</h1>
    //       {/* <div className="w-full h-[250px] relative mb-2">
    //         <Image src={post.image} fill alt="sumnail" />
    //       </div> */}
    //       <div>
    //         <div className="mb-2">
    //           <h1 className="text-2xl">{post.title}</h1>
    //           <span className="text-sm">testtesttesttest</span>
    //         </div>
    //         <div className="text-sm flex items-center text-neutral-400">
    //           <span>{post.date}</span>
    //           <span className="mx-2 pb-1">|</span>
    //           <span>태그명</span>
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
    <>
      {posts.map((post) => (
        <>
          <Link
            href={`/post/${post.category}/${post.id}`}
            key={post.id}
            className="py-10 px-4 flex flex-col"
          >
            <span className="mb-2">category</span>
            <h1 className="text-3xl font-bold mb-1.5 text-title hover:text-blue-500">
              {post.title}
            </h1>
            <span className="text-sm text-description">testtesttesttest</span>
          </Link>
          <hr className="mx-4" />
        </>
      ))}
    </>
  );
};

export { List };
