import { useState } from "react";
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

  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [newCommentText, setnewCommentText] = useState("");

  function handleNewCommentChange(ev) {
    setnewCommentText(ev.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    setnewCommentText("");
  }

  function deleteComment(comment) {
    console.log("delete comment");
    const newComments = comments.filter((element) => element !== comment);
    setComments(newComments);
  }

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
            return <p key={item.content}>{item.content}</p>;
          } else if (item === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Leave a comment"
        />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
