import { usePostsQuery } from "../../../hooks/queries";
import { useBlogData } from "../../../hooks/useBlogData";
import { useFilteredPosts } from "../../../hooks/useFilteredPosts";
import { Card } from "../../core";
import "./styles.scss";

interface PostsListProps {
  postsQuantity?: number;
}

const PostsList = ({ postsQuantity }: PostsListProps) => {
  const { filters } = useBlogData();
  const { data: posts, isLoading, error } = usePostsQuery();

  const filteredPosts = useFilteredPosts(posts, filters);
  const displayPosts = postsQuantity
    ? filteredPosts?.slice(0, postsQuantity)
    : filteredPosts;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts</div>;
  }

  if (!displayPosts?.length) {
    return <div>No posts found</div>;
  }

  return (
    <div className="posts-list">
      {displayPosts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
