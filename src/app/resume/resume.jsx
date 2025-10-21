import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.workExperience}>
          <h3>
            Senior Contract Frontend Engineer at Bayer |
            <a href="https://ohif.org/" target="_blank">
              OHIF Medical Imaging Platform
            </a>
            <p className={styles.date}>
              <i>May 2023 - October 2025</i>
            </p>
          </h3>
          <ul>
            <li>
              Served as the primary frontend engineer for a cancer lesion
              tracking application built for radiologists and oncologists,
              architecting and implementing critical features for patient scan
              analysis.
            </li>
            <li>
              Led frontend technical decisions and designed a completely new
              custom extension within the OHIF (Open Health Imaging Foundation)
              platform, integrating seamlessly with OHIF's mode system and
              viewer architecture while delivering unique functionality.
            </li>
            <li>
              Implemented RECIST 1.1 criteria for tumor measurement and
              assessment, enabling doctors to make precise annotations, track
              lesion progression, and identify abnormalities in medical imaging
              scans.
            </li>
            <li>
              Navigated and contributed to an extremely complex monorepo
              architecture, managing dependencies across multiple packages,
              extensions, and modes while maintaining code quality and build
              performance.
            </li>
            <li>
              Collaborated closely with UI/UX designers to create an intuitive
              interface for complex medical workflows, translating clinical
              requirements into responsive, accessible frontend components using
              React, TypeScript, and OHIF's extension framework.
            </li>
            <li>
              Drove technical discussions and code reviews, establishing
              frontend patterns and best practices for the team while ensuring
              HIPAA compliance and medical-grade reliability.
            </li>
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>
            Senior Frontend Engineer at Copper |
            <a href="https://copper.co/" target="_blank">
              copper.co
            </a>
            <p className={styles.date}>
              <i>August 2022 - April 2023</i>
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
