import styles from './Navbar.module.css'
import logo from '../../assets/disco_logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='py-1 bg-slate-100 mb-4 '>
            <span className='container mx-auto flex justify-between flex-nowrap'>
                <Link to="/">
                    <div className='text-xl cursor-pointer '>
                        <img className='w-14 h-14 inline' src={logo} alt="" />
                        My Blog
                    </div>
                </Link>
                <div >
                    <ul className='flex items-center justify-end h-full '>
                        <li className={styles.nav_button}><Link to="/"> Home</Link></li>
                        <li className={styles.nav_button}>Archive</li>
                        <li className={styles.nav_button}>About</li>
                        <li className={styles.nav_button}>Contact</li>
                        <li className={styles.nav_button}><Link to="/login"> Login</Link></li>
                    </ul>
                </div>
            </span>
        </nav>
    )
}

export default Navbar
