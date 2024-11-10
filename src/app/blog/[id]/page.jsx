import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

// Function to fetch data based on the id
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data'); // Throw an error if fetch fails
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const {id} = await params;

    const post = await getData(id)
    return {
        title: post.title,
        description: post.desc,
    };
}

// Main BlogPost component
async function BlogPost({ params }) {
    const { id } = await params;

    let data;
    try {
        data = await getData(id);
    } catch (error) {
        return notFound();
    }

    if (!data) {
        return notFound(); 
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <p className={styles.desc}>{data.desc}</p>
                        <div className={styles.author}>
                            <Image
                                src={data.img}
                                alt={data.username || 'User Avatar'}
                                width={40}
                                height={40}
                                className={styles.avatar}
                            />
                            <span className={styles.username}>{data.username}</span>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt={data.title || 'Blog Post Image'}
                            fill={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>{data.content}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;