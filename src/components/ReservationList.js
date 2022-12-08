
const ReservationList = ({props}) => {

    const current = new Date(props.reservationDate);
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const tStart = new Date(props.timeStart)
    const cStart = `${tStart.getHours()}`;
    const tEnd = new Date(props.timeEnd)
    const cEnd = `${tEnd.getHours()}`;

  return (
    <>
        <tr>
            <td>
                {date}
            </td>
            <td>
                {(props.facilities.length>0) ? props.facilities[0].courtType : 'none'}
            </td>
            <td>
                {cStart}
            </td>
            <td>
                {cEnd}
            </td>
            <td>
                {(props.facilities.length>0) ? props.facilities[0].courtSlot : 'none'}
            </td>
            <td>
                &#8369;
                {(props.facilities.length>0) ? props.facilities[0].price : 0}
            </td>
            <td>
                {props.status}
            </td>
            <td>
                <button>Edit</button>
                <button>Cancel</button>
            </td>
        </tr>
    </>
    )
}


export default ReservationList