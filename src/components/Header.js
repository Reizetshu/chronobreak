// Style
import '../assets/styles/Header.css';

// Image
import shattered from '../assets/break.png';
import menu from '../assets/menu.png';

const Header = () => {
  return (
    <header>
      <div className='container-menu'>
        <img src={menu} about='menu' className='menu'></img>
      </div>
      <div className='branding'>
          <img src={shattered} alt='breaklogo' className='shattered'/>
          <h3>ChronoBreak</h3>
      </div>
    </header>
  )
}

export default Header;