import { useState, ChangeEvent, InvalidEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publisedAt: Date;
  content: Content[];
}

export function Post({ author, content, publisedAt }: PostProps) {
  const publishedDateFormatted = format(publisedAt, "yyyy-MM-dd");
  const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, {
    locale: enUS,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["Very nice post!"]);
  const [newCommentText, setnewCommentText] = useState("");

  function handleNewCommentChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.target.setCustomValidity("");
    console.log("handleNewCommentChange: event target value");
    console.log(ev.target.value);
    setnewCommentText(ev.target.value);
  }

  function handleInvalidNewComment(ev: InvalidEvent<HTMLTextAreaElement>) {
    ev.target.setCustomValidity("This field is required.");
  }

  function handleCreateNewComment(ev: React.SyntheticEvent<HTMLFormElement>) {
    ev.preventDefault();
    // Why using currentTarget instead of target: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
    const target = ev.currentTarget;
    const newCommentText = target.comment.value;
    setComments([...comments, newCommentText]);
    setnewCommentText("");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = !newCommentText.length;

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
          } else if (item.type === "link") {
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
          required
          onInvalid={handleInvalidNewComment}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
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
