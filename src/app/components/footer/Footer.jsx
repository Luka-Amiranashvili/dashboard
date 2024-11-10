import Image from 'next/image';
import styles from './footer.module.css';


function Footer() {
    return (
        <div className={styles.container}>
            <div>@2024 Luka Dev. All rights reserved.</div>
            <div>
                <div className={styles.social}>
                    <Image src='/facebook.png' width={15} height={15} className={styles.icon} alt='Luka Dev Facebook Account' />
                    <Image src='/instagram.jpeg' width={15} height={15} className={styles.icon} alt='Luka Dev Instagram Account' />
                    <Image src='/twitter.png' width={15} height={15} className={styles.icon} alt='Luka Dev Twitter Account' />
                    <Image src='/discord.jpeg' width={15} height={15} className={styles.icon} alt='Luka Dev Discord Account' />
                </div>
            </div>
        </div>
    )
}

export default Footer
