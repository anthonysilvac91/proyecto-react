import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'

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
                        <Link to={`/`} >Home</Link>
                        </li>
                        <li>
                        <Link to={`/category/washitape`}>Washitapes</Link>
                        </li>
                        <li>
                        <Link to={`/category/planificadores`}>Planificadores</Link>
                        </li>
                        <li>
                        <Link to={`/category/sticker`}>Stickers</Link>
                        </li>
                        <li>
                        <Link to={`/category/accesorios`}>Accesorios</Link>
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