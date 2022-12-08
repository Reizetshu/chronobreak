import {Routes, Route} from 'react-router';
import {useSelector} from 'react-redux';

// Components
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

// Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Homepage from './pages/Homepage';
import NewBooking from './pages/NewBooking';
import BookingCollection from './pages/BookingCollection';
import MyCart from './pages/MyCart';
import BookInstruction from './pages/BookInstruction';
import SportsFacilities from './pages/SportsFacilities';
import SignInNav from './components/SignInNav';

const App = () => {

  // // Calling all users on the reducer
  // const allUsers = useSelector(state => state.allUsers);
  // const reservations = useSelector(state => state.allReservations);
  // const transactions = useSelector(state => state.allTransactions);

  // // Filtering all pending Booking
  // const allPendingReservation = reservations.filter(reservation => reservation.status.toUpperCase() === 'PENDING');

  // // Filtering all done Booking
  // const allDoneReservation = reservations.filter(reservation => reservation.status.toUpperCase() === 'DONE');

  return (
    <>
      <Header />
      {/* Routing Path */}
      <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/new-booking' element={<NewBooking />} />
          <Route path='/booking-collection' element={<BookingCollection />} />
          <Route path='/my-cart' element={<MyCart />} />
          <Route path='/booking-instruction' element={<BookInstruction />} />
          <Route path='/sports-facilities' element={<SportsFacilities />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
