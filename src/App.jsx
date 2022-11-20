import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Lorem ipsum dolor sit amet" />
          <Post author="Valentina Garavaglia" content="New Post" />
        </main>
      </div>
    </div>
  );
}
