import { useContext } from "react";
import { PostContext } from "../PostContext";
import { getFeed } from "../service/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error(
      "usePost must be used inside PostContextProvider"
    );
  }

  const {
    loading,
    setLoading,
    post,
    setPost,
    feed,
    setFeed,
  } = context;

  const handleFeed = async () => {
    try {
      setLoading(true);

      const data = await getFeed();

      setFeed(data.posts || []);
    } catch (error) {
      console.error("Failed to fetch feed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    feed,
    post,
    setPost,
    handleFeed,
  };
};