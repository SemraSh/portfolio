import Image from "next/image";
import styles from "./page.module.css";
import github_logo from "../../public/github-mark.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.code}>
          this is a place for me to play with the new things I explore as a
          front end dev
        </p>
      </div>
      <div>
        <h4>here is a little history of this website</h4>
        <p>
          <b>10th of June 2024</b> I just started building this website with
          Next.js
        </p>
      </div>
      <div>
        <a href="https://github.com/SemraSh" target="_blank">
          <Image src={github_logo} alt="github link" width={23} height={23} />
        </a>
      </div>
    </main>
  );
}
