import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav>
            <div className='Navbar'>
                <div className='Logo'>
                    KIRIPAPER
                </div>
                <div >
                    <ul className='Menu'>
                        <li>
                        <NavLink to='/' >Home</NavLink>
                        </li>
                        <li>
                        <NavLink to='/category/washitape' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} >Washitapes</NavLink>
                        </li>
                        <li>
                        <NavLink to='/category/planificadores' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Planificadores</NavLink>
                        </li>
                        <li>
                        <NavLink to='/category/sticker' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Stickers</NavLink>
                        </li>
                        <li>
                        <NavLink to='/category/accesorios' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>   
        </nav>
    )
}

export default Navbar