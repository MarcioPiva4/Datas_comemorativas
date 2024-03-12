import styles from './Posts.module.scss';

import bannerFestaCerejeira from 'assets/Page1/festa-da-cerejeira.jpg';
import bannerAniversarioGarca from 'assets/Page2/garca.jpg';
import bannerMeioAmbiente from 'assets/Page3/meioambiente.png';
import bannerDiaDaMulher from 'assets/Page4/Mulher.png';
import { Link } from 'react-router-dom';

export default function Posts({title, is}: {title: string, is: "home"|"posts" }){
    return(
        <div className={styles.section__content__relacionados}>
        <h3 className={is === "posts" ? styles.section__content__relacionados__titlePosts : styles.section__content__relacionados__titleHome}>{title}</h3>
        <div className={styles.section__content__relacionados__content}>
            <div>
                <h1>Festa da cerejeira</h1>
                <img src={bannerFestaCerejeira} alt="Festa da cerejeira"></img>
                <Link to={'/festa-cerejeira'}><button>Sobre</button></Link>
            </div>
            <div>
                <h1>Aniversario de Garça</h1>
                <img src={bannerAniversarioGarca} alt="Aniversario de Garça"></img>
                <Link to={'/aniversario-garca'}><button>Sobre</button></Link>
            </div>
            <div>
                <h1>Dia do meio ambiente</h1>
                <img src={bannerMeioAmbiente} alt="Dia do meio ambiente"></img>
                <Link to={'/dia-meio-ambiente'}><button>Sobre</button></Link>
            </div>
            <div>
                <h1>Dia da mulher</h1>
                <img src={bannerDiaDaMulher} alt="Dia da mulher"></img>
                <Link to={'/dia-da-mulher'}><button>Sobre</button></Link>
            </div>
        </div>
    </div>
    )
}