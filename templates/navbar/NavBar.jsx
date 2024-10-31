import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/favorites'}>Favorites</Link>
                </li>
            </ul>
            <h1>Principales Criptomonedas</h1>
        </nav>
    )
}

export default NavBar