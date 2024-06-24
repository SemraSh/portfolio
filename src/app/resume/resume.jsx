import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resumeWrapper}>
      <iframe
        src="https://drive.google.com/file/d/1q8SuuSREutOWTYIlsWoWRb48E2lvq642/preview"
        width="640"
        height="880"
        // allow="autoplay"
      ></iframe>
    </div>
  );
}
