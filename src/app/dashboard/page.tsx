import styles from "../page.module.css";
import Link from 'next/link'

export default function Page() {
    return (
        <div className={styles.page}>
            <h3>My Dashboard</h3>
            <main className={styles.main}>
                <Link href={"/"}>Go Home</Link>
            </main>
        </div>
    );
}