import React from "react";
import styles from "@/styles/AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.greeting}>
      <h1>Welcome to the Cultural Heritage App</h1>
      <p>
        Explore the world by learning about different countries, their
        languages, and unique traditions. Challenge yourself with quizzes and
        become a global citizen!
      </p>
    </div>
  );
};

export default AboutSection;
