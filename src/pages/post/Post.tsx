import { useParams, useNavigate } from "react-router-dom";
import { usePostQuery } from "../../hooks/queries";
import { Chip, Button, PostsList } from "../../components/core";
import "./styles.scss";
import { useBlogData } from "../../hooks/useBlogData";
import { formatDate } from "../../helpers/date";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, error } = usePostQuery(id!);
  const { getAuthorInfo } = useBlogData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !post) {
    return <div>Error loading post</div>;
  }

  const authorInfo = getAuthorInfo(post.author.id);

  return (
    <div className="post">
      <div className="post__back-button">
        <Button
          color="secondary"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <img src="/icons/arrow-back.svg" alt="Back" />
          Back
        </Button>
      </div>
      <div className="post__container">
        <header className="post__header">
          <h1 className="post__title">{post.title}</h1>

          <div className="post__info">
            <div className="post__info-author-avatar">
              <img src={authorInfo?.profilePicture} alt={authorInfo?.name} />
            </div>
            <div className="post__info-details">
              <p className="post__info-details-author">
                Written by: <span>{authorInfo?.name}</span>
              </p>
              <p className="post__info-details-date">
                {formatDate(post?.createdAt)}
              </p>
            </div>
          </div>

          <img
            className="post__thumbnail"
            src={post.thumbnail_url}
            alt={post.title}
          />
        </header>

        <div className="post__content">{post.content}</div>

        <div className="post__footer">
          <h2>Latest Articles</h2>

          <PostsList postsQuantity={3} />
        </div>
      </div>
    </div>
  );
};

export default Post;
