import SideNav from "../components/SideNav";

import '../assets/styles/BookingCollection.css'

const BookingCollection = () => {
  return (
    <>
    <SideNav />
      <div className='collection-reservation'>
        <div>
          <h3>Reservations</h3>
        </div>
        <tr>
          <td>
            <h4>Reservation Date</h4>
          </td>
          <td>
            <h4>Facility Type</h4>
          </td>
          <td>
            <h4>Time Start</h4>
          </td>
          <td>
            <h4>Time End</h4>
          </td>
          <td>
            <h4>Price</h4>
          </td>
        </tr>
        <tr>
          <td>
            <p>Reservation Date</p>
          </td>
          <td>
            <p>Facility Type</p>
          </td>
          <td>
            <p>Time Start</p>
          </td>
          <td>
            <p>Time End</p>
          </td>
          <td>
            <p>Price</p>
          </td>
        </tr>
      </div>
      <div className='collection-transaction'>
        <div>
          <h3>Transactions</h3>
        </div>
        <tr>
          <td>
            <h4>Reservation Date</h4>
          </td>
          <td>
            <h4>Facility Type</h4>
          </td>
          <td>
            <h4>Time Start</h4>
          </td>
          <td>
            <h4>Time End</h4>
          </td>
          <td>
            <h4>Price</h4>
          </td>
        </tr>
        <tr>
          <td>
            <p>Reservation Date</p>
          </td>
          <td>
            <p>Facility Type</p>
          </td>
          <td>
            <p>Time Start</p>
          </td>
          <td>
            <p>Time End</p>
          </td>
          <td>
            <p>Price</p>
          </td>
        </tr>
      </div>
    </>
  )
}

export default BookingCollection;