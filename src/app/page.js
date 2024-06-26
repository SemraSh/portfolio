import Image from "next/image";
import styles from "./page.module.css";
import github_logo from "../../public/github-mark.png";
import imza from "../../public/imza.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <text className={styles.name}>
          semra <br />
          dora / shukrieva
        </text>
        <p className={styles.smallDescription}>
          <b>What&apos;s with the surnames?</b> <br />I have 3 nationalities,
          Bulgarian, Turkish and British, I was born in Bulgaria moved to Turkey
          at 11, moved to UK at 24.
          <br /> Dora is my Turkish surname, due to some political structures in
          Turkey i had to chose a Turkish surname. I was born in Bulgaria as
          Semra Refkaeva Shukrieva, but semrashukrieva.com was taken so I took
          semradora.com
        </p>
        <h4>Senior Javascript developer</h4>
      </div>

      <div className={styles.techSkills}>
        <b>TECH SKILLS</b>
        <p>
          <b>Languages & Frameworks:</b> React, Typescript, GraphQL/Apollo,
          NodeJS
        </p>
        <p>
          <b>Tools & Platforms: </b>Docker, Git, Styled Components, Jest, Jira,
          Storybook, Cypress, AWS
        </p>
        <p>
          <b>Database & APIs: </b>Websockets, Terraform, The Graph, Ether.js
        </p>
      </div>

      <div className={styles.section}>
        <p>
          Currently based in Barcelona, I live in a beautiful apartment filled
          with books, paintings, plants and hand made utilities. My journey
          began in 2014 when I moved from Turkey to London, where I pursued a
          master&apos;s degree. In London&apos;s vibrant atmosphere, I founded a
          3D printing and product design company, connecting artists with
          skilled craftsmen, guided by my philosophy: Celebrate innovation and
          timeless design. In 2017, I transitioned into software development.
          Now a skilled JavaScript engineer, I&apos;ve worked with various
          companies, bringing a collaborative spirit and a drive to improve team
          dynamics. Every project is an opportunity to enhance team performance
          and quality, always embodying the principles of honesty, transparency,
          and kindness.
        </p>
      </div>

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
        <p>
          <b>25th of June 2024</b> Add work experience page, I have a slight
          regret using next.js at the moment, the app browser didn&apos;t reload
          when I made changes on the work experience page.
        </p>
        <p>
          <b>26th of June 2024</b>
          Changed the work experience page to be plain html rather than PDF
          viewer
        </p>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <a href="https://github.com/SemraSh" target="_blank">
          <Image src={github_logo} alt="github link" width={23} height={23} />
        </a>
        <Link href="/">
          <Image src={imza} alt="signature" width={500} height={"auto"} />
        </Link>
      </div>
    </main>
  );
}
