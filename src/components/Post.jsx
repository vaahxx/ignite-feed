import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ author, content, publisedAt }) {
  const publishedDateFormatted = format(publisedAt, "yyyy-MM-dd");
  const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, {
    locale: enUS,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publisedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p>{item.content}</p>;
          } else if (item === "link") {
            return (
              <p>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
