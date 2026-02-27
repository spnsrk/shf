import React from "react";
import { Link } from "react-router-dom";
import styles from "./ReusableCard.module.css";

const ReusableCard = ({ src, title, description, linkTo, downloadUrl }) => {
  const handleDownloadClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Only open URL if downloadUrl is provided and not empty
    if (downloadUrl && downloadUrl.trim() !== "" && downloadUrl !== "#") {
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <Link to={linkTo} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img className={styles.imageContent} src={src} alt={title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonRow}>
            <button className={styles.button}>Explore Now</button>
            {downloadUrl !== undefined && (
              <button className={styles.button} onClick={handleDownloadClick}>
                Download PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReusableCard;