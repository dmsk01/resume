import React from "react";
import styles from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__wpapper}>
        <p>Ooops!</p>
        <h1>Error 404</h1>
        <p>Page not found :(</p>
      </div>
    </div>
  );
}

export default NotFound;
