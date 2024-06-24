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
        <text className={styles.name}>semra dora / shukrieva </text>
        <p className={styles.smallDescription}>
          <b>What&apos;s with the surnames?</b> <br />I have 3 nationalities,
          Bulgarian, Turkish and British, I was born in Bulgaria moved to Turkey
          at 11, moved to UK at 24.
          <br /> Dora is my Turkish surname, due to some political structures in
          Turkey i had to chose a Turkish surname. I was born in Bulgaria as
          Semra Refkaeva Shukrieva, but semrashukrieva.com was taken so I took
          semradora.com
        </p>
        <h4>web developer</h4>
      </div>

      {/* STORY */}
      <div className={styles.section}>
        <p className={styles.paragraph}>
          In 2008-2014 I studied Architecture in Istanbul Technical University{" "}
          <br />
          <br />
          In 2014, I moved from Turkey to the UK for a master’s at UCL Bartlett.
          My partner and I then launched a 3D printing and product design
          company, which led us to create a web app connecting people with local
          craftsmen. <br />
          <br />
          In 2017, I transitioned to software development and have since worked
          with various companies as a Javascript developer.
          <br />
          <br />I nowadays am looking a stable workplace where I can trust the
          environment
        </p>
      </div>

      {/* WORKS */}
      <div className={styles.section}></div>

      {/* JOURNAL */}
      <div className={styles.section}>
        <b>Journal of this website</b>
        <p>
          <b>10th of June 2024</b> I just started building this website with
          Next.js
        </p>
        <p>
          <b>14th of June 2024</b> Added font a favicon images and all the UI/UX
          tools, designy bits
        </p>
        <p>
          <b>18th of June 2024</b> Adding info about myself
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
