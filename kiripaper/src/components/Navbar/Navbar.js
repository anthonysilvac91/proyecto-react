import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../service/firebase'


const NavBar = () =>{
        const [categories, setCategories] = useState([])
    
        useEffect (() =>{
    
            
            const collectionRef = collection(db, 'categories')
    
    
            getDocs(collectionRef).then(response =>{
                console.log(response)
    
                const categoriesAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            
        }, [])
    
        console.log(categories)

        return(
            <nav>
                <div className='navbar'>
                    <div className='Logo'> 
                    <Link to = '/'><h2>Kiripaper</h2> </Link>
                     </div>
                    <div className='menu' >
                        
                            
                            {categories.map(cat =>(
                            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} >{cat.label}</NavLink>
                        ))}
                           
                        
                        
                    </div>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
             

        )

}

export default NavBar