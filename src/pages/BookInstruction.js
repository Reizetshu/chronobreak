 import SideNav from "../components/SideNav";

 import '../assets/styles/BookingInstruction.css'

const BookInstruction = () => {
  return (
    <>
    <SideNav />
    <div className='instruction'>
      <div>
        <h3>Tariffs for various venues</h3>
      </div>
      <div className='container-venues'>
        <div className='venues-price'>
          <p><strong>Venues</strong></p>
          <p><strong>Price</strong></p>
        </div>
        <div className='venues-price'>
          <p>Badminton Court</p>
          <p>&#8369;100 per court</p>
        </div>
        <div className='venues-price'>
          <p>Basketball Court</p>
          <p>&#8369;500 per court</p>
        </div>
        <div className='venues-price'>
          <p>Volleyball Court</p>
          <p>&#8369;500 per court</p>
        </div>
        <div className='venues-price'>
          <p>Table Tennis Room</p>
          <p>&#8369;75 per table</p>
        </div>
      </div>
      <div className='rules'>
        <p className='rules-txt'>The price listed above are on hourly basis.</p>
        <p className='rules-txt'>No refund is allowed once a booking order is placed.</p>
        <p className='rules-txt'>For reservation users need:</p>
        <p className='rules-txt'>
          a. Call our service counter at 8888-999 up to 7 calendar days in advance.
        </p>
        <p className='rules-txt'>
          b. Provide full name and email address over the phone and to register.
        </p>
      </div>
      <div className='regulation-all'>
        <div className='booking-regulation'>
          <h3>Booking Regulations</h3>
        </div>
        <div className='regulation'>
          <p className='regulation-txt'>
            Users are permitted to book any venues to a maximum of 2 hours a day.
            </p>
          <p className='regulation-txt'>
            Click here to view the "Sports Facilities Rules".
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookInstruction;