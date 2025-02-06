import Logo from '../../logo.svg'
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";


import NavBarMenu from './Details'
import './NavBar.css';

const NavBar = () => {
  return (
   <nav className="navBar">
        <div className="nav_container">
            <div className="nav_logo">
                <img src={Logo} alt="Logo Converse" />
            </div>
           
                <ul className='navbar-menu'>
                    {NavBarMenu.map((item) => (
                        <li key={item.id} className='navbar-item'>
                            <a href={item.Link} className='navbar-link'>{item.title}</a>
                        </li>
                    ))}
                </ul>
            <div className="icons">
                <div className="icon icon-user">
                <FaRegUser/>
                </div>
                <div className="icon cart">
                    <FaCartShopping />
                   <div className="cart-count">2</div>
                </div>
                <div className='mobile-menu'>
                    <CiMenuBurger className='hamburger-icon'/>
                </div>
            </div>
        </div>
   </nav>
  )
}

export default NavBar
