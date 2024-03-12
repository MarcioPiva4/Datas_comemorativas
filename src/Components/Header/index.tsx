import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { IoIosFlower, IoMdHome } from "react-icons/io";
import { AiOutlineWoman } from "react-icons/ai";
import { RiLeafFill } from "react-icons/ri";
import { GiHeron } from "react-icons/gi";
export default function Header(){
    return(
        <header className={styles.header}>
            <ul>
                <li><Link to={'/'}><IoMdHome color='#fff'/></Link></li>
                <li><Link to={'/festa-cerejeira'}><IoIosFlower color='#fff'/></Link></li>
                <li><Link to={'/aniversario-garca'}><GiHeron color='#fff'/></Link></li>
                <li><Link to={'/dia-meio-ambiente'}><RiLeafFill color='#fff'/></Link></li>
                <li><Link to={'/dia-da-mulher'}><AiOutlineWoman color='#fff'/></Link></li>
            </ul>
        </header>
    )
}