import { useNavigate } from "react-router-dom";
import { Post } from "../../../types/blog";
import { Chip } from "../index";
import "./styles.scss";
import { formatDate } from "../../../helpers/date";

interface CardProps {
  post: Post;
  key: string;
}

const Card = ({ post, key }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article className="card" key={key} onClick={handleClick}>
      <div className="card__image">
        <img src={post.thumbnail_url} alt={post.title} />
      </div>

      <div className="card__content">
        <div className="card__meta">
          <p>{formatDate(post.createdAt)}</p>
          <span className="card__author">{post.author.name}</span>
        </div>

        <h2 className="card__title">{post.title}</h2>

        <div className="card__content">{post.content.slice(0, 100)}</div>

        <div className="card__categories">
          {post.categories?.map((category) => (
            <Chip key={category.id}>{category.name}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
