import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";
import React, { Fragment } from "react";

export default async function Home() {
  const posts = await getPosts();
  const user = await currentUser();
  const dbUserId = await getDbUserId();
  return (
    <Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6">
          {user && <CreatePost />}

          <div className="space-y-6">
            {Array.isArray(posts) &&
              posts.map((post) => (
                <PostCard key={post.id} post={post} dbUserId={dbUserId} />
              ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 sticky top-20">
          <WhoToFollow />
        </div>
      </div>
    </Fragment>
  );
}
