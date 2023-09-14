/* react */
import React from 'react';
import { Link } from 'react-router-dom';
/* css  */
import styles from'../ErrorPage/ErrorPage.module.css';
/**
 * React component to create the error page when URL is incorrect
 * @returns { React.ReactElement } Error page
 */
function ErrorPage() {
  return (
    <main className={styles.errorPage}>
        <h1 className={styles.errorTitle}>404</h1>
        <p className={styles.errorText}>La page que vous recherchez n'existe pas.</p>
        <Link  className={styles.errorLink} to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}
export default ErrorPage