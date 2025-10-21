import Image from "next/image";
import styles from "./page.module.css";
import github_logo from "../../public/github-mark.png";
import linkedin_logo from "../../public/linkedin.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <p className={styles.name}>
          semra <br />
          shukrieva
        </p>
        <p className={styles.title}>Senior Software Engineer</p>
        <p className={styles.subtitle}>
          (Frontend leadership experience, Senior-level backend engineering)
        </p>
      </div>

      <div className={styles.section}>
        <b>SKILLS</b>
        <div>
          <p>
            <b>Languages & Frameworks:</b> React, HTML, CSS, Typescript,
            GraphQL/Apollo, NodeJS, Next.js, Tailwind, JavaScript,
          </p>
          <p>
            <b>Tools & Platforms: </b>Docker, Git, Styled Components, Jest,
            Jira, Storybook, Cypress, AWS, Terraform, The Graph, Ether.js,
            Prisma
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <b>Manifesto</b>
        <div>
          <p>Create beauty that breathes — imperfect, alive, and honest.</p>
          <p>Move toward what feels real, even if it's uncomfortable.</p>
          <p>Trust silence more than noise, intuition more than instruction.</p>
          <p>Keep my eyes open to light — the morning kind, the human kind.</p>
          <p>Make space for tenderness, even when the world feels sharp.</p>
          <p>
            Walk lightly on this earth but leave deep footprints of meaning.
          </p>
          <p>Don't worship busyness or applause. Choose presence.</p>
          <p>
            Love without performing, work without pretending, rest without
            guilt.
          </p>
          <p>Let time soften you, not harden you.</p>
          <p>
            Protect your peace like art — rare, unrepeatable, worth everything.
          </p>
        </div>
      </div>

      {/* UPDATES */}
      <div className={styles.section}>
        <b>Updates</b>
        <div>
          <p>
            <b>10th of June 2024</b> I just started building this website with
            Next.js
          </p>
          <p>
            <b>14th of June 2024</b> Added font a favicon images and all the
            UI/UX tools, designy bits
          </p>
          <p>
            <b>18th of June 2024</b> Adding info about myself
          </p>
          <p>
            <b>25th of June 2024</b> Add work experience page, I have a slight
            regret using next.js at the moment, the app browser didn&apos;t
            reload when I made changes on the work experience page.
          </p>
          <p>
            <b>26th of June 2024</b>
            Changed the work experience page to be plain html rather than PDF
            viewer
          </p>
          <p>
            <b>20th of October 2025</b>
            Updated work experience
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.social}>
          <a href="https://github.com/SemraSh" target="_blank">
            <Image src={github_logo} alt="github link" width={23} height={23} />
          </a>
          <a
            href="https://www.linkedin.com/in/semra-shukrieva-55639656/"
            target="_blank"
          >
            <Image
              src={linkedin_logo}
              alt="linkedin link"
              width={23}
              height={23}
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
