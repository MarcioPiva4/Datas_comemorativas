import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Este é um projeto desenvolvido por Márcio | ©Todos os direitos reservados <span>2024</span>.</p>
        </footer>
    )
}