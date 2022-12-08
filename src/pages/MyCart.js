//db con
import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

import SideNav from "../components/SideNav";

import '../assets/styles/MyCart.css';
import ReservationList from '../components/ReservationList';

const MyCart = () => {

  //initial load of data
  const allReservations = useSelector(state=>state.allReservations)

  const dispatch = useDispatch();
  useEffect(()=>{
      axios.get('http://localhost:8080/api/v1/reservations')
      .then(res =>{
      //dispatch the data into reducer
      dispatch({type:"RESERVATION",payload:{allReservations:res.data}})
      })
      .catch(err =>{
      console.log('error daw',err);
      })
  }, [])//initial load display only, if [] is not here, it will not stop displaying on console.

  return (
    <>
    <SideNav />
      <div className='mycart'>
        <div>
          <h3>Added to Cart</h3>
        </div>
        <div>
          <tr>
            <td>
              <strong>Reservation Date</strong>
            </td>
            <td>
              <strong>Facility Type</strong>
            </td>
            <td>
              <strong>Time Start</strong>
            </td>
            <td>
              <strong>Time End</strong>
            </td>
            <td>
              <strong>Court Slot #</strong>
            </td>
            <td>
              <strong>Price</strong>
            </td>
            <td>
              <strong>Status</strong>
            </td>
            <td>
              <strong>Options</strong>
            </td>
          </tr>
          {
            allReservations.map(value=>{
              return <ReservationList props={value}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default MyCart;