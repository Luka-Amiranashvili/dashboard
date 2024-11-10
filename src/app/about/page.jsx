import Image from 'next/image';
import styles from './page.module.css';
import Button from '../components/Button/Button';


function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src='https://images.pexels.com/photos/6333679/pexels-photo-6333679.jpeg?auto=compress&cs=tinysrgb&w=600' fill={true} 
                    alt=''
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
            <div className={styles.item}>
                <h1 
                    className={styles.title}>Who Are We?
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit est debitis vitae quia, porro ad earum ipsum veniam unde quos mollitia, esse impedit necessitatibus culpa, vel praesentium? Obcaecati, fugiat.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit est debitis vitae quia, porro ad earum ipsum veniam unde quos mollitia, esse impedit necessitatibus culpa, vel praesentium? Obcaecati, fugiat.
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit ipsum minima quasi magnam dignissimos, facere consequuntur dolor vero, amet sequi id sapiente consectetur, expedita nam quaerat error corporis nostrum.
                </p>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>What We Do
                </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi doloribus quibusdam eligendi accusantium quos aspernatur hic, debitis modi fuga obcaecati dolores consequatur dolor nulla. Blanditiis recusandae doloremque veritatis ipsam.
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url='/contact' text='Contact' />
            </div>
            </div>
        </div>
    )
}

export default About
