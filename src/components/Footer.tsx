import { Link } from 'react-router-dom'
import PokemonPic from '../assets/pikachu.png';
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt='Pokéball' />
                Pokemons</Link>
            <Link
                onClick={e => e.preventDefault()}
                className={styles.footerLink} to="/items">
                <img className={styles.footerIcon} src={ItemsPic} alt='Pokéball' />
                Items</Link>
            <Link
                onClick={e => e.preventDefault()}
                className={styles.footerLink} to="/location">
                <img className={styles.footerIcon} src={LocationPic} alt='Pokéball' />
                Map</Link>
        </footer>
    )
}

export default Footer
