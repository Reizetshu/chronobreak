import { useState } from 'react';
import axios from 'axios';

import SideNav from '../components/SideNav';

import '../assets/styles/NewBooking.css';

const NewBooking = () => {

    const [facility, setFacility] = useState('badminton');
    const [ facilityTimeSlots, setFacilityTimeSlots ] = useState( null );
    const [date, setDate] = useState({birthday: new Date()});
    const [time, setTime] = useState({birthday: new Date()});
    const [slot, setSlot] = useState('');

    const onFacilityChangeHandler = event => {
        setFacility(event.target.value);
        axios.get(`http://localhost:8080/api/v1/facilities/${event.target.value}`).then(
            result => {
                console.log( result );
                setFacilityTimeSlots( result.data );
            }
        )
    };

    const onDateChangeHandler = event => {
        setFacility(event.target.value)
    }

  return (
    <>
    <SideNav />
        <div className='newbooking'>
            <div className='inner-newbooking'>
                <div className='container-newbooking'>
                    <h3>Facilities</h3>
                    <select 
                    value={facility}
                    className='facilities'
                    onChange={onFacilityChangeHandler}>
                        <option value='badminton'>
                            Badminton Courts
                        </option>
                        <option value='basketball'>
                            Basketball Courts
                        </option>
                        <option value='volleyball'>
                            Volleyball Courts
                        </option>
                        <option value='tabletennis'>
                            Table Tennis Room
                        </option>
                    </select>
                    <div>
                        <h3>Date</h3>
                        <div className='date'>
                            <input type='date' className='date'
                            onChange={onDateChangeHandler}
                            required/>
                        </div>
                    </div>
                </div>
                <div>

                    {
                        facilityTimeSlots && facilityTimeSlots.map( timeSlot => {
                           return (
                            <div className='container-slot-first'>
                                <div className='place'>
                                    <p>Something(s)</p>
                                    <p>{ timeSlot.accommodationTime }</p>
                                </div>
                                <div>
                                    <button className='slot'>#1</button>
                                    <button className='slot'>#2</button>
                                    <button className='slot'>#3</button>
                                </div>
                            </div>
                           ) 
                        })
                    }

                    <div className='container-slot-first'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓8:00 ~ 9:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓9:00 ~ 10:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓10:00 ~ 11:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓12:00 ~ 13:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓14:00 ~ 15:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓15:00 ~ 16:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓16:00 ~ 17:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓17:00 ~ 18:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓18:00 ~ 19:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓19:00 ~ 20:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                    <div className='container-slot-last'>
                        <div className='place'>
                            <p>Place(s)</p>
                            <p>🕓20:00 ~ 21:00</p>
                        </div>
                        <div>
                            <button className='slot'>#1</button>
                            <button className='slot'>#2</button>
                            <button className='slot'>#3</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default NewBooking;