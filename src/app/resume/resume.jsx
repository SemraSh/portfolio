import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.workExperience}>
          <h3>
            Senior Frontend Engineer at Copper |
            <a href="https://copper.co/" target="_blank">
              copper.co
            </a>
            <p className={styles.date}>
              <i>August 2022 - May 2024</i>
            </p>
          </h3>
          <ul>
            <li>
              Optimized web app performance for fast load times and smooth
              functionality across devices and browsers.
            </li>
            <li>
              Collaborated with design teams to implement responsive layouts.
            </li>
            <li>
              Integrated features like ClearLoop, Custody, Copper Network,
              Staking, DeFi Connectivity, and Treasury Management.
            </li>
            <li>
              Ensured compliance with industry standards for digital asset
              custody and trading.
            </li>
            <li>
              Worked closely with backend, QA, and product teams to implement
              features and reviewed code for high standards.
            </li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Senior Frontend Engineer at Nearform |
            <a href="https://www.nearform.com/" target="_blank">
              nearform.co
            </a>
            <p className={styles.date}>
              <i>December 2021 - June 2022</i>
            </p>
          </h3>
          <ul>
            <li>
              Led the development of front-end solutions using React,
              Typescript, Jest, Cypress, Storybook, and D3.js.
            </li>
            <li>Created responsive and user-friendly interfaces.</li>
            <li>Mentored junior developers and conducted code reviews.</li>
            <li>
              Contributed to architectural decisions and participated in Agile
              ceremonies.
            </li>
            <li>Optimized front-end performance and scalability.</li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Fullstack Javascript Engineer at DigitalCatapult |
            <a href="https://www.digicatapult.org.uk/" target="_blank">
              digicatapult.org.uk
            </a>
            <p className={styles.date}>
              <i>November 2019 - October 2021</i>
            </p>
          </h3>
          <ul>
            <li>
              Collaborated with cross-functional teams to deliver digital
              products.
            </li>
            <li>Created and contributed to open-source repositories.</li>
            <li>
              Worked on both backend and front-end projects using a rich JS tech
              stack.
            </li>
            <li>
              Conducted daily code reviews and led the creation of a component
              library.
            </li>
            <li>Participated in technical interviews for new hires.</li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Fullstack Javascript Engineer at YLD |
            <a href="https://www.yld.io/" target="_blank">
              yld.io
            </a>
            <p className={styles.date}>
              <i> May 2018 - November 2019</i>
            </p>
          </h3>
          <ul>
            <li>Worked alongside top engineers on various client projects.</li>
            <li>
              Contributed to frontend components and collaborated with product
              and design teams.
            </li>
            <li>
              Gained experience in agile teams and advanced to a mid-level
              front-end role.
            </li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Fullstack Javascript Consultant at Aidence through YLD |
            <a href="https://www.aidence.com/" target="_blank">
              aidence.com
            </a>
            <p className={styles.date}>
              <i>April 2019 - August 2019</i>
            </p>
          </h3>
          <ul>
            <li>
              Utilized Git for version control and collaborated on code with
              team members.
            </li>
            <li>
              Developed user interfaces using React and managed databases.
            </li>
            <li>
              Wrote unit tests, conducted integration testing, and debugged
              applications.
            </li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Junior Javascript Consultant at Elife through YLD |
            <a href="https://elifesciences.org/" target="_blank">
              elifesciences.org
            </a>
            <p className={styles.date}>
              <i>April 2019 - August 2019</i>
            </p>
          </h3>
          <ul>
            <li>Developed new features using JavaScript frameworks.</li>
            <li>
              Collaborated on GitHub repositories and followed lean practices
              for development.
            </li>
            <li>
              Documented code and APIs, wrote tests, and engaged with the
              open-source community.
            </li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Junior Javascript Consultant at Trainline through YLD |
            <a href="https://www.thetrainline.com/" target="_blank">
              thetrainline.com
            </a>
            <p className={styles.date}>
              <i>June 2018 - November 2018</i>
            </p>
          </h3>
          <ul>
            <li>
              Worked on migrating European extensions to the main website.
            </li>
            <li>Integrated front-end components for smooth user navigation.</li>
            <li>
              Collaborated with product and design teams and learned best
              practices from senior engineers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
