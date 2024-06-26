import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <menu className={styles.menu}>
      <Link href={"/"}>home</Link> |
      <Link href={"/resume"}>work experience</Link>
    </menu>
  );
}
