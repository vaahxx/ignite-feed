import { Content, Post } from "./components/Post";
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
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content: "I just uploaded a new project on my portfolio.",
      },
      {
        type: "paragraph",
        content: "The project's name is DoctorCare 🚀",
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
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content: "I just uploaded a new project on my portfolio.",
      },
      {
        type: "paragraph",
        content: "The project's name is DoctorCare 🚀",
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
              content={post.content as Content[]}
              publisedAt={post.publisedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
