import SignInNav from "../components/SignInNav";
import SideNav from "../components/SideNav";

// Style
import '../assets/styles/HomePage.css';

const Homepage = () => {
  return (
    <>
    <SideNav />
      <div className='home'>
        <div className="inner-home">
          <div>
            <h1>"Take a Break and Be Healthy!"</h1>
          </div>
          <div>
            <p>ChronoBreak is the a site where you can book a facilities for sports like badminton, basketball, volley, and table tennis.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;