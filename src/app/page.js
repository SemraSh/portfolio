import Image from "next/image";
import styles from "./page.module.css";
import github_logo from "../../public/github-mark.png";
import imza from "../../public/imza.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.brand}>
        <Image
          style={{ height: "100%", width: "auto" }}
          src={imza}
          alt="signature"
        />
        <p>
          this is a place for me to play with the new things I explore as a
          front end dev
        </p>
      </div>

      <div className={styles.history}>
        <b>here is a little history of this website</b>
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
