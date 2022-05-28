import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
