import Posts from 'Components/Posts';
import styles from './Section.module.scss';

interface PropSection{
    src: string;
    title: string;
    content1: string;
    content2: string;
}

export default function Section({src, title, content1, content2}: PropSection){
    return(
        <section className={styles.section}>
            <img src={src} alt={title} className={styles.section__banner}></img>
            <div className={styles.section__content}>
                <h1 className={styles.section__content__title}>{title}</h1>

                <div className={styles.section__content__paragraphs}>
                    <div>
                        <p>{content1}</p>
                    </div>

                    <div>
                        <p>{content2}</p>
                    </div>
                </div>

                <Posts title='Relacionados' is='posts'></Posts>
            </div> 
        </section>
    )
}