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
        <br />
        web developer
      </div>

      {/* STORY */}
      <div className={styles.section}>
        <h3>My story ( I will make this shorter in time) </h3>
        <p>
          I studied Architecture and absolutely loved it. If I were to study
          again, I would choose architecture without hesitation. It&apos;s not
          just about the field itself; architecture school teaches you about
          life, politics, people, love, the city, and how we live. It shapes how
          you see the world and how to be. However, if you&apos;re not fortunate
          enough to come from a wealthy or influential background, a career in
          architecture can be challenging. It often involves very long hours
          with inadequate compensation.
        </p>
      </div>

      {/* WORKS */}
      <div className={styles.section}></div>

      {/* JOURNAL */}
      <div className={styles.journal}>
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
