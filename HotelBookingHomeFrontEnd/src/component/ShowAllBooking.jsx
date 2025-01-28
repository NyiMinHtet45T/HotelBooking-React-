import React, { useEffect, useState } from 'react'
import { deleteBookingById, getAllBooking } from '../service/bookingService';
import { getUserById } from '../service/UserService';
import { getRoomById } from '../service/RoomService';
import { RiArrowTurnBackLine, RiBardLine, RiCalendarLine, RiCheckLine, RiCloseLine, RiDoorOpenLine, RiEmpathizeFill, RiEmpathizeLine, RiGitRepositoryLine, RiMailLine, RiNumbersLine, RiPhoneLine, RiTeamLine, RiUser3Line, RiUserLine, RiWalletLine } from '@remixicon/react';

export default function ShowAllBooking() {

    const [bookinglist, setBookinglist] = useState([]);
    const [BookingInfo, setBookingInfo] = useState([]);

    const [model, setModel] = useState(false);
    const [letter, setLetter] = useState("");
    const [bookingId, setBookingId] = useState(0);
    const [positions, setPosition] = useState();
    const [confirLetter, setConfirLetter] = useState("");

    useEffect(() => {
        getBooking();
    }, [])

    useEffect(() => {
        if (bookinglist.length > 0) {
            addBookingInfo();
        }
    }, [bookinglist]);

    const getBooking = () => {
        getAllBooking().then(res => (
            setBookinglist(res.data)
        )).catch(err => console.log(err));
    }

    const addBookingInfo = async () => {
        const bookingDetail = await Promise.all(bookinglist.map(async (bookingObj) => {
            const userObj = await addUserInfo(bookingObj.userId);
            const roomObj = await addRoomInfo(bookingObj.roomId);
            return {
                ...bookingObj,
                userObj,
                roomObj,
                "achieve": true,
                "cancel": true
            }

        }));
        setBookingInfo(bookingDetail);
    }

    const addUserInfo = async (id) => {
        const userObj = await getUserById(id);
        return {
            ...userObj
        }
    }

    const addRoomInfo = async (id) => {
        const roomObj = await getRoomById(id);
        return {
            ...roomObj
        }
    }

    const addDecideLetter = (event, e, id) => {
        const rect = event.target.getBoundingClientRect();
        setPosition(rect.top + window.scrollY);
        setModel(true);

        if (e) {
            setLetter("Achieve");
            setBookingId(id);
        } else {
            setLetter("Delete");
            setBookingId(id);
        }
    }

    const decide = (e) => {
        if (letter.startsWith("A") && e) {
            setModel(false);
            cancel();
        } else if (letter.startsWith("D") && e) {
            cancelBooking(bookingId);
            setModel(false);
        } else {
            setModel(false)
            setConfirLetter("");
        }
    }

    const cancel = async () => {
        const bookings = await Promise.all(BookingInfo.map(async (booking) => (
            booking.id === bookingId ? { ...booking, "achieve": false, "cancel": true } : booking
        )));
        setBookingInfo(bookings);
    }

    const cancelBooking = (id) => {
        deleteBookingById(id).then(res => {
            setConfirLetter(res.data),
                getBooking();
        });
    }


    return (
        <div>
            <h2 className="section_header" style={{ marginTop: 100 }}><RiGitRepositoryLine /> All Booking</h2>
            <span>{confirLetter}</span>
            <div>
                {model && (<div>
                    <div className='overlay' ></div><div className="modal" style={{ top: positions }} >
                        <div className="modal-content">
                            <p className='model-text'>Are You Sure You Want To {letter} this Booking?</p>
                            <button className='model-btn ' onClick={() => decide(true)} >{letter}</button>
                            <button className='model-btn' onClick={() => decide(false)}><RiArrowTurnBackLine size={13} /> No</button>
                        </div>
                    </div>
                </div>)}
            </div>
            {
                BookingInfo.map((item, index) => (
                    <div key={item.id}>
                        <div className='add_room_container' style={{ marginTop: 20 }}>
                            <div className="add-roomFlex">
                                <h3 style={{ marginLeft: 20 }}><RiBardLine size={15} color='red' /> Booking {index + 1}</h3>
                                <span style={{ marginLeft: 900 }}></span>
                                {item.achieve && (<button className='model-btn' style={{ color: 'green' }} onClick={(e) => addDecideLetter(e, true, item.id)}><RiCheckLine size={13} /> Achieve Booking</button>)}
                                {item.cancel && (<button className='model-btn' style={{ color: 'red' }} onClick={(e) => addDecideLetter(e, false, item.id)}><RiCloseLine size={13} /> Cancel Booking</button>)}
                            </div>

                            <hr style={{ margin: 8 }} />
                            <div id='Modelbox'>
                            </div>
                            <div className='add-roomFlex'>
                                <img src={`/image/${item.roomObj.data.roomMainUrl}`} style={{ width: '300px', height: 'auto', marginLeft: 5, borderRadius: 20 }} />
                                <div className="add-roomCol9" style={{ marginLeft: 30, marginTop: 20 }}>
                                    <div className="add-roomFlex">
                                        <div className="add-roomCol3 ">
                                            <div className="add-roomFlex">
                                                <label><RiEmpathizeLine size={13} /> name : <span className='ts-color'>{item.userObj.data.name}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiDoorOpenLine size={13} /> Room Type : <span className='ts-color'>{item.roomObj.data.roomType}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiUser3Line size={13} /> Adults/Children : <span className='ts-color'>{item.numberOfAdults}/{item.numberOfChildren}</span> </label>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="add-roomFlex">
                                        <div className="add-roomCol3 ">
                                            <div className="add-roomFlex">
                                                <label><RiEmpathizeFill size={13} /> UserName : <span className='ts-color'>{item.userObj.data.username}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiNumbersLine size={13} /> Room Number : <span className='ts-color'>{item.roomObj.data.roomNumber}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiTeamLine size={13} /> Total : <span className='ts-color'>{item.totalNumberOfAdults}</span></label>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="add-roomFlex">
                                        <div className="add-roomCol3 ">
                                            <div className="add-roomFlex">
                                                <label><RiMailLine size={13} /> Email : <span className='ts-color'>{item.userObj.data.email}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiUserLine size={13} /> Population : <span className='ts-color'>{item.roomObj.data.population}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiCalendarLine size={13} /> CheckInDate : <span className='ts-color'>{item.checkInDate}</span></label>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="add-roomFlex">
                                        <div className="add-roomCol3 ">
                                            <div className="add-roomFlex">
                                                <label><RiPhoneLine size={13} /> Phone Number : <span className='ts-color'>{item.userObj.data.phoneNumber}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiWalletLine size={13} /> Room Price : <span className='ts-color'>{item.roomObj.data.roomPrice}</span></label>
                                            </div>
                                        </div>
                                        <div className="add-roomCol3">
                                            <div className="add-roomFlex">
                                                <label><RiCalendarLine size={13} /> CheckOutDate : <span className='ts-color'>{item.checkOutDate}</span></label>
                                            </div>
                                        </div>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
