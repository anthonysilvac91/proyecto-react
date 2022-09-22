import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

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
                        <a href="#">Home</a>
                        </li>
                        <li>
                        <a href="#">Tienda</a>
                        </li>
                        <li>
                        <a href="#">Descargas</a>
                        </li>
                        <li>
                        <a href="#">Blog</a>
                        </li>
                        <li>
                        <a href="#">Contacto</a>
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