import Link from 'next/link';
import styles from './page.module.css';


function Portolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link className={styles.item} href='/portfolio/illustrations'>
                    <span className={styles.title}>
                        Illustrations
                    </span>
                </Link>
                <Link className={styles.item} href='/portfolio/websites'>
                    <span className={styles.title}>
                        Websites
                    </span>
                </Link>
                <Link className={styles.item} href='/portfolio/applications'>
                    <span className={styles.title}>
                        Application
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Portolio
