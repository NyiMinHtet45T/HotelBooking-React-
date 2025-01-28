import React, { useState } from 'react'
import { getRoomsByNoAndDateAndType } from '../service/RoomService';
import MostPopularRoom from './MostPopularRoom';
import { Link } from 'react-router-dom';
import { isAdmin } from '../service/AuthService';
import { RiCalendar2Line, RiDoorOpenLine, RiNumbersLine, RiSearchLine, RiUserLine } from '@remixicon/react';

export default function HeaderRoomSearchComponent() {

    const [roomNumber, setRoomNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [type, setType] = useState('');

    const [avilableRooms, setAvailableRoom] = useState([]);

    const isAdminLar = isAdmin();

    const findAvilableRoomByNoAndDateAndType = (e) => {
        e.preventDefault();
        const avilableRoomByNoAndDateAndType = { roomNumber, checkInDate, checkOutDate, type };
        getRoomsByNoAndDateAndType(avilableRoomByNoAndDateAndType).then(res => setAvailableRoom(res.data)).catch(err => console.log(err));
    }

    return (
        <>
            <header className="section_container header_container">
                <div className="header_image_container">
                    <div className="header_content">
                        <h1>Enjoy Your Dream Vacation</h1>
                        <p>Book Hotels, Flights and stay packages at lowest price.</p>
                    </div>
                    <div className="booking_container" id="booking_container">
                        <form action="">
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="text" value={roomNumber} placeholder='Eg.101' onChange={e => setRoomNumber(e.target.value)} />
                                    <label ><RiNumbersLine size={16} /> RoomNo.</label>
                                </div>
                                <p>Add RoomNumber Eg.101</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="date" value={checkInDate} onChange={e => setCheckInDate(e.target.value)} />
                                    <label ><RiCalendar2Line size={16} /> Check In</label>
                                </div>
                                <p>Add date</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="date" value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} />
                                    <label ><RiCalendar2Line size={16} /> Check Out</label>
                                </div>
                                <p>Add date</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <select name="" id="" className='selectionform' value={type} onChange={e => setType(e.target.value)}>
                                        <option value="">All</option>
                                        <option value="Standard">Standard</option>
                                        <option value="Superior">Superior</option>
                                        <option value="Family">Family</option>
                                        <option value="Single">Single</option>
                                        <option value="Double">Double</option>
                                        <option value="Sea View">Sea View</option>
                                        <option value="Luxury">Luxury</option>
                                    </select>
                                    <label ><RiDoorOpenLine size={16} /> RoomType</label>
                                </div>
                                <p>Add RoomType</p>
                            </div>
                        </form>
                        <button className="btn" onClick={(e) => findAvilableRoomByNoAndDateAndType(e)}><RiSearchLine size={18} /></button>
                    </div>
                </div>
            </header>
            <section className="searchSection_container">
                <div className="searchPopular_grid">
                    {
                        avilableRooms.map(room => (

                            <div className="popular_card" key={room.id}>
                                <img src={"/image/" + room.roomMainUrl} width={500} height={300} alt="popular lotel" />
                                <div className="popular_content">
                                    <div className="popular_card_header">
                                        <h4><RiDoorOpenLine size={16} /> {room.roomType}</h4>
                                        <p><RiNumbersLine size={16} /> {room.roomNumber}</p>
                                        <h4>MMK {room.roomPrice}</h4>
                                    </div>
                                    <div className='bu_content'>
                                        <span><RiUserLine size={15} /> {room.population}</span>
                                        <div style={{ marginTop: 10 }}>
                                            {isAdminLar && <Link to={"/room-detail/1"} style={{ marginRight: 10, background: "blue" }} className='btnDetail btn'>Delete</Link>}
                                            {!isAdminLar ? <Link to={"/room-detail/1"} className='btnDetail btn'>Details</Link> : <Link to={"/add-room/1/2"} style={{ background: "blue" }} className='btnDetail btn'>Update</Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                </div>
            </section>
            <MostPopularRoom />
        </>
    )
}

window.addEventListener("scroll", function () {
    const bookingform = this.document.getElementById("booking_container")
    if (this.window.scrollY > 130) {
        bookingform.classList.add("full-width");
    }
    else {
        bookingform.classList.remove("full-width");
    }
})

