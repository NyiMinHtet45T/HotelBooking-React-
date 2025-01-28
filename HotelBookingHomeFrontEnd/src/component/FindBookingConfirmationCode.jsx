import { RiSearchLine } from '@remixicon/react'
import React, { useState } from 'react'
import { RiBardFill, RiCalendarLine, RiCloudOffLine, RiContactsBookLine, RiDoorOpenLine, RiMailLine, RiTeamLine, RiUser3Line, RiWalletLine } from '@remixicon/react';
import { getUserByBookingByConfimationCode } from '../service/bookingService';

export default function FindBookingConfirmationCode() {

    const [roomPhotoMain, setRoomPhotoMain] = useState();
    const [userName, setUserName] = useState();
    const [roomType, setRoomType] = useState();
    const [totalNumberOfAdults, setTotalNumberOfAdults] = useState();
    const [email, setEmail] = useState();
    const [roomPrice, setRoomPrice] = useState();
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();

    const [confirmationCode, setConfirmationCode] = useState();

    const getUserBookingHistoryByConfirmationCode1 = (e) => {
        e.preventDefault();
        console.log("Hello")
        console.log(confirmationCode)
        getUserByBookingByConfimationCode(confirmationCode).then(res => setBookingHistory(res.data)).catch(err => console.log(err));
    }

    console.log(confirmationCode)

    const setBookingHistory = (historyData) => {
        setRoomPhotoMain(historyData.roomPhotoMain)
        setUserName(historyData.userName)
        setRoomType(historyData.roomType)
        setTotalNumberOfAdults(historyData.totalNumberOfAdults)
        setEmail(historyData.email)
        setRoomPrice(historyData.roomPrice)
        setCheckInDate(historyData.checkInDate)
        setCheckOutDate(historyData.checkOutDate)
    }

    return (
        <div>
            <div className="add_room_container">
                <form>
                    <input type="text" className='add-roomInput' placeholder='Enter ConfirmationCode' onChange={(e) => setConfirmationCode(e.target.value)} style={{ width: 500, marginLeft: 400 }} />
                    <button className="model-btn" onClick={(e) => getUserBookingHistoryByConfirmationCode1(e)}><RiSearchLine size={18} /> Search</button>
                </form>
            </div>
            <div>
                {
                    userName && (<div className='add_room_container' style={{ marginTop: 20, marginBottom: 20 }}>
                        <h3 style={{ marginLeft: 20 }}><RiBardFill color='red' /> Booking</h3>
                        <hr style={{ margin: 8 }} />
                        <div>
                        </div>
                        <div className='add-roomFlex'>
                            <img src={`/image/${roomPhotoMain}`} style={{ width: '300px', height: 'auto', borderRadius: 20 }} />
                            <div className="add-roomCol9" style={{ marginLeft: 30, marginTop: 20 }}>
                                <div className="add-roomFlex">
                                    <div className="add-roomCol3 ">
                                        <div className="add-roomFlex">
                                            <label><RiUser3Line size={13} /> Username : <span className='ts-color'>{userName}</span></label>
                                        </div>
                                    </div>
                                    <div className="add-roomCol3">
                                        <div className="add-roomFlex">
                                            <label><RiDoorOpenLine size={13} /> Room Type : <span className='ts-color'>{roomType}</span></label>
                                        </div>
                                    </div>
                                    <div className="add-roomCol3">
                                        <div className="add-roomFlex">
                                            <label><RiTeamLine size={13} /> Total : <span className='ts-color'>{totalNumberOfAdults}</span> </label>
                                        </div>
                                    </div>
                                </div><br />
                                <div className="add-roomFlex">
                                    <div className="add-roomCol3 ">
                                        <div className="add-roomFlex">
                                            <label><RiMailLine size={13} /> Email : <span className='ts-color'>{email}</span></label>
                                        </div>
                                    </div>
                                    <div className="add-roomCol3">
                                        <div className="add-roomFlex">
                                            <label><RiWalletLine size={13} /> Room Price : <span className='ts-color'>MMK {roomPrice}</span></label>
                                        </div>
                                    </div>
                                    <div className="add-roomCol3">
                                        <div className="add-roomFlex">
                                            <label><RiCalendarLine size={13} /> CheckInDate : <span className='ts-color'>{checkInDate}</span></label>
                                        </div>
                                    </div>
                                </div><br />
                                <div className="add-roomFlex">
                                    <div className="add-roomCol3"></div>
                                    <div className="add-roomCol3"></div>
                                    <div className="add-roomCol3">
                                        <div className="add-roomFlex">
                                            <label><RiCalendarLine size={13} /> CheckOutDate : <span className='ts-color'>{checkOutDate}</span></label>
                                        </div>
                                    </div>


                                </div><br />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    )
}
