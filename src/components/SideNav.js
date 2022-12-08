import {Link} from 'react-router-dom';

// Style
import '../assets/styles/SideNav.css'

const SideNav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link className='link' to='/sign-in'>Sign in</Link>
            </li>
            <li>
                <Link className='link' to='/sign-up'>Sign up</Link>
            </li>
            <li>
                <Link className='link' to='/'>Home</Link>
            </li>
            <li>
                <Link className='link' to='/new-booking'>New Booking</Link>
            </li>
            <li>
                <Link className='link' to='/booking-collection'>Booking Collection</Link>
            </li>
            <li>
                <Link className='link' to='/my-cart'>My Cart</Link>
            </li>
            <li>
                <Link className='link' to='/booking-instruction'>Booking Instruction</Link>
            </li>
            <li>
                <Link className='link' to='/sports-facilities'>Sports Facilities Map</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SideNav;