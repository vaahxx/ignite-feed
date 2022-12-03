import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  const [cheersCount, setCheersCount] = useState(0);

  function handleCheerComment() {
    setCheersCount((state) => state + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vaahxx.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Valentina Garavaglia</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Remove comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleCheerComment}>
            <ThumbsUp />
            Cheer <span>{cheersCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
