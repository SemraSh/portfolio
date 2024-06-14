import Image from "next/image";
import styles from "./page.module.css";
import github_logo from "../../public/github-mark.png";
import imza from "../../public/imza.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ME */}
      <div className={styles.head}>
        <text className={styles.name}>semra dora &lpar; shukrieva &rpar;</text>
        <br />
        web developer
      </div>
      {/* WORKS */}
      <div className={styles}>
        <p>Portfolio</p>
      </div>

      {/* JOURNAL */}
      <div className={styles.journal}>
        <b>Journaling while bilding this website</b>
        <p>
          <b>10th of June 2024</b> I just started building this website with
          Next.js
        </p>
        <p>
          <b>14th of June 2024</b> I struggled to select a font a favicon images
          and all the UI/UX tools, but getting there
        </p>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <a href="https://github.com/SemraSh" target="_blank">
          <Image src={github_logo} alt="github link" width={23} height={23} />
        </a>
        <Link href="/">
          <Image src={imza} alt="signature" />
        </Link>
      </div>
    </main>
  );
}
