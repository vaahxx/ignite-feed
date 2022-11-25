import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/vaahxx.png" />
          <div className={styles.authorInfo}>
            <strong>Valentina Garavaglia</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa.</p>
        <p>É um projeto que fiz no NLW Return, evento da Rocketseat. </p>
        <p>O nome do projeto é DoctorCare 🚀 </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw </a>{" "}
          <a href="#">#rocketseat</a>
        </p>
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
