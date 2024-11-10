import Button from '@/app/components/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';


const getData = function(cat) {
    const data = items[cat]

    if(data) {
        return data
    }

    return notFound()
}

    async function Category({params}) {
    const { category } = await params;
    const data = getData(category)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{category}
            </h1>
            {data.map(item=>(
            <div className={styles.item} key={item.id}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                    <Button text='See More' url='#'/>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        src={item.image}
                        alt=''
                        fill={true}
                    />
                </div>
            </div>
            ))}
        </div>
    )
}

export default Category
