
import React, { useEffect } from "react";
import "../style/home.scss";
import Post from "../../../componnet/Post";
import { usePost } from "../hook/usePost";

const Home = () => {
  const { feed, handleFeed, loading } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <div className="mainpage">
      <div className="feed">
        <div className="posts">
          {feed.map((post) => (
            <Post
              key={post._id}
              user={post.user}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home