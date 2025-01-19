import styles from "../page.module.css";

export default function Login() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h3>Login</h3>
                <form>
                    <label>Email</label>
                    <input></input>
                </form>
            </main>
        </div>
    );
}