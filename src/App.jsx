import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: "1",
    author: {
      name: "Valentina Garavaglia",
      role: "Web developer",
      avatarUrl: "https://github.com/vaahxx.png",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      {
        type: "paragraph",
        content: "O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publisedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: "2",
    author: {
      name: "Valentina Garavaglia",
      role: "Web developer",
      avatarUrl: "https://github.com/vaahxx.png",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      {
        type: "paragraph",
        content: "O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publisedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publisedAt={post.publisedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
