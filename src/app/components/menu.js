"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu.module.css";

export default function Menu() {
  const pathname = usePathname();

  return (
    <menu className={styles.menu}>
      <Link
        href={"/"}
        style={{ color: pathname === "/" ? "#ff5c00" : "inherit" }}
      >
        <b>HOME</b>
      </Link>{" "}
      |{" "}
      <Link
        href={"/resume"}
        style={{ color: pathname === "/resume" ? "#ff5c00" : "inherit" }}
      >
        <b>WORKS</b>
      </Link>
    </menu>
  );
}
