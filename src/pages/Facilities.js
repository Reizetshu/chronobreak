import SideNav from "../components/SideNav"

const Facilities = () => {
  return (
    <>
    <SideNav />
        <div>
            <div>
                <h3>Facilities</h3>
                <select>
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
            </div>
            <div>
                <input type='date'/>
            </div>
            <div>
                <div>
                    <p>Place(s)</p>
                    <p>8:00 ~ 9:00</p>
                </div>
                <div>
                    <button>#1</button>
                    <button>#2</button>
                    <button>#3</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Facilities