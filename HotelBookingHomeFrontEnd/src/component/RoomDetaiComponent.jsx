import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getRoomById, getRoomPhotUrl } from '../service/RoomService';
import { getUserId, isUserLogIn } from '../service/AuthService';
import { addBooking, getAlreadyExitsBookingById } from '../service/bookingService';
import { RiAddLine, RiArrowLeftDoubleLine, RiArrowRightDoubleLine, RiArrowTurnBackLine, RiBookMarkedLine, RiCalendar2Line, RiCloseCircleLine, RiDoorOpenLine, RiLoginBoxLine, RiNumbersLine, RiPlanetLine, RiSubtractLine, RiUser3Line, RiUser5Line, RiUserLine } from '@remixicon/react';
import { Link } from 'react-router-dom';

export default function RoomDetaiComponent() {

    const [roomType, setRoomType] = useState("");
    const [roomPrice, setRoomPrice] = useState("");
    const [population, setPopulation] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [roomDescription, setRoomDescription] = useState("");

    const [roomPhotoUrl1, setPhotoUrl1] = useState('');
    const [roomPhotoUrl2, setPhotoUrl2] = useState('');
    const [roomPhotoUrl3, setPhotoUrl3] = useState('');
    const [roomPhotoUrl4, setPhotoUrl4] = useState('');

    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [numberOfAdults, setNumberOfAdults] = useState(1);
    const [numberOfChildren, setNumberOfChildren] = useState(0);
    const [bookingConfirmationCode, setBookingConfirmationCode] = useState();

    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');

    const [showModelForLogin, setShowModelForLogin] = useState(false);
    const [positions, setPosition] = useState();


    const [error, setError] = useState({
        checkInDate: '', checkOutDate: ''
    })

    const [items, setItems] = useState([]);

    const { id } = useParams();

    const nevigate = useNavigate();

    const [loginMal, setLoginMal] = useState(false);
    const [showModel, setShowModel] = useState(false);

    const [alreadyBooking, setAlreadyBooking] = useState([]);

    const handlePre = () => {
        setItems(pre => {
            const left = pre[pre.length - 1];
            return [left, ...pre.slice(0, -1)];
        });
    }

    const handleNext = () => {

        setItems(pre => {
            const [first, ...left] = pre;
            return [...left, first];
        });
    }

    useEffect(() => {
        getRoom();
        addUserId();
        addRoomId();
        getAlreadyExitsBooking();
    }, [])


    const getAlreadyExitsBooking = () => {
        getAlreadyExitsBookingById(id).then(res => setAlreadyBooking(res.data)).catch(err => console.log(err));
    }

    const addUserId = () => {
        const userId = getUserId();
        setUserId(userId);
    };

    const addRoomId = () => {
        setRoomId(id);
    }

    const booking = (e) => {
        e.preventDefault();
        if (checkBooking()) {
            const bookingObj = { checkInDate, checkOutDate, numberOfAdults, numberOfChildren, userId, roomId };
            addBooking(bookingObj).then(res => setBookingConfirmationCode(res.data.bookingConfirmationCode)).then(res => window.alert("Successfully Booking")).then(() => getAlreadyExitsBooking()).catch(err => window.alert("Select Date Is Not Available!"));
        }
    }

    const getRoom = async () => await getRoomById(id).then(async (res) => {
        settingRoomDetail(res.data);
        await getRoomPhotUrl(res.data.roomPhotoId).then(res => settingRoomPhotUrl(res.data)).catch(err => console.log(err));
    }).catch(err => console.log(err));

    const settingRoomDetail = (e) => {
        setRoomType(e.roomType);
        setRoomPrice(e.roomPrice);
        setPopulation(e.population);
        setRoomNumber(e.roomNumber);
        setRoomDescription(e.roomDescription);
    }

    const settingRoomPhotUrl = (e) => {
        setPhotoUrl1(e.roomPhotoUrl1);
        setPhotoUrl2(e.roomPhotoUrl2);
        setPhotoUrl3(e.roomPhotoUrl3);
        setPhotoUrl4(e.roomPhotoUrl4);
    }

    useEffect(() => {
        if (roomPhotoUrl1 != null) {
            setItems([{ id: 1, name: '', des: '', backgroundImage: roomPhotoUrl1 },
            { id: 2, name: roomType, des: roomDescription, backgroundImage: roomPhotoUrl2 },
            { id: 3, name: '', des: '', backgroundImage: roomPhotoUrl3 },
            { id: 4, name: '', des: '', backgroundImage: roomPhotoUrl4 }]);
        }
    }, [roomPhotoUrl1]);

    const adultIncrement = () => setNumberOfAdults(pre => pre + 1);

    const adultDecrement = () => {
        if (numberOfAdults > 1) {
            setNumberOfAdults(pre => pre - 1);
        }
    };

    const childIncrement = () => setNumberOfChildren(pre => pre + 1);
    const childDecrement = () => {
        if (numberOfChildren > 0) {
            setNumberOfChildren(pre => pre - 1)
        }
    };

    const isLogInHandler = (e) => {
        e.preventDefault();
        const isAuth = isUserLogIn();
        const rect = event.target.getBoundingClientRect();
        setPosition(rect.top + window.scrollY);
        if (!isAuth) {
            setShowModel(true);
        } else {
            setShowModelForLogin(true);
        }
    }

    const isBookingHandler = (e, decide) => {
        if (decide) {
            booking(e);
            setShowModelForLogin(false);
        } else {
            setShowModelForLogin(false);
        }
    }

    const loginHandler = () => {
        setLoginMal(true);
        setShowModel(false);
        nevigate("/login/" + id + "#log");
    }

    const cancelHandler = () => {
        setShowModel(false);
    }

    const checkBooking = () => {
        var vaild = true;
        const errCopy = { ...error };

        const checkInDate1 = new Date(checkInDate);
        const checkOutDate1 = new Date(checkOutDate);

        if (checkOutDate1 < checkInDate1) {
            errCopy.checkOutDate = "CheckOutDate Must Be Greater Than CheckInDate!";
            errCopy.checkInDate = "CheckInDate Must Be Less Than CheckOutDate!";
            vaild = false;
        } else if (checkOutDate.trim() != '' && checkInDate.trim() != '') {
            errCopy.checkOutDate = '';
            errCopy.checkInDate = '';
        } else if (checkOutDate.trim() == '') {
            errCopy.checkOutDate = "CheckOutDate Required!";
            vaild = false;
        }
        if (checkInDate.trim() == '') {
            errCopy.checkInDate = "CheckInDate Required!"
            vaild = false;
        }
        setError(errCopy);
        return vaild;
    }

    return (
        <div>
            <div className="container">
                <div className="slide">
                    {
                        items.map((item) => (

                            <div key={item.id} className="item" style={{ backgroundImage: `linear-gradient(to right, rgba(20,20,20,0.4),rgba(30,90,10,.1)),url("/image/${item.backgroundImage}")` }}>
                                <div className="content">
                                    <div className="name">{item.name}</div>
                                    <div className="des">{item.des}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="button">
                    <button className="prev" onClick={handlePre}><RiArrowLeftDoubleLine /></button>
                    <button className="next" onClick={handleNext}><RiArrowRightDoubleLine /></button>
                </div>
            </div>
            <div>
                {showModel && (<div>
                    <div className='overlay' ></div><div className="modal" style={{ top: positions - 400 }} >
                        <div className="modal-content">
                            <p className='model-text'><RiPlanetLine size={13} /> You Are Not LogIn!</p>
                            <button className='model-btn ' onClick={loginHandler}><RiLoginBoxLine size={14} /> Login</button>
                            <button className='model-btn' onClick={cancelHandler}><RiCloseCircleLine size={13} /> No</button>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                {showModelForLogin && (<div>
                    <div className='overlay' ></div><div className="modal" style={{ top: positions - 400 }} >
                        <div className="modal-content">
                            <p className='model-text'><RiPlanetLine size={13} />  Are You Sure You Want To Booking This Room?</p>
                            <button className='model-btn ' onClick={(e) => isBookingHandler(e, true)}><RiBookMarkedLine size={15} /> Booking</button>
                            <button className='model-btn' onClick={(e) => isBookingHandler(e, false)}><RiArrowTurnBackLine size={13} /> No</button>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                <div>
                    <div className="booking_container" id="booking_container">
                        <form action="">
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                                    <label><RiCalendar2Line size={15} /> Check In</label>
                                </div>
                                {error.checkInDate == '' ? <small>Add date</small> : <small style={{ color: 'red' }}>{error.checkInDate}</small>}
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                                    <label ><RiCalendar2Line size={15} /> Check Out</label>
                                </div>
                                {error.checkOutDate == '' ? <small>Add date</small> : <small style={{ color: 'red' }}>{error.checkOutDate}</small>}
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <label className='bookingInput'><RiUser3Line size={15} /> Adult</label>
                                    <div className='bookingSelection'>
                                        <span className='total'>{numberOfAdults}</span>
                                        <span className='plus' onClick={adultIncrement}><RiAddLine size={10} /></span>
                                        <span className='minus' onClick={adultDecrement}><RiSubtractLine size={10} /></span>
                                    </div>

                                </div>
                                <p>Number of Adults</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <label className='bookingInput'><RiUser5Line size={15} /> Children</label>
                                    <div className='bookingSelection'>
                                        <span className='total'>{numberOfChildren}</span>
                                        <span className='plus' onClick={childIncrement}><RiAddLine size={10} /></span>
                                        <span className='minus' onClick={childDecrement}><RiSubtractLine size={10} /></span>
                                    </div>
                                </div>
                                <p>Number of Children</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='pou'>
                    <div style={{ marginTop: 900 }}>
                        {
                            alreadyBooking.length > 0 && (<div >
                                {
                                    alreadyBooking.map((alBookings, index) => (
                                        <div key={index} className=' detail1_container'>
                                            <div className='detail_box'>
                                                <div>
                                                    <h5>Booking : <span className='ts-color'>{index + 1}</span></h5>
                                                </div>
                                                <div >
                                                    <h5>CheckInDate : <span className='ts-color'>{alBookings.checkInDate}</span></h5>
                                                </div>
                                                <div >
                                                    <h5>CheckOutDate : <span className='ts-color'>{alBookings.checkOutDate}</span></h5>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>)
                        }
                    </div>
                    <div className='detail_container' style={{ marginBottom: 20 }}>
                        {
                            bookingConfirmationCode ? <div style={{ marginLeft: 100 }}>You Are Booking ConfirmationCode:<span style={{ color: 'blue' }}>{bookingConfirmationCode}</span><button onClick={() => nevigate("/bookingConfirmation")} className='btnBooking' to={"/bookingConfirmation"}>Find Booking</button></div> :
                                <div className='detail_box'>
                                    <div><RiDoorOpenLine size={15} /> {roomType}</div>
                                    <span className='stick'></span>
                                    <div><RiUserLine size={15} /> {population}</div>
                                    <span className='stick'></span>
                                    <p><RiNumbersLine size={15} /> {roomNumber}</p>
                                    <span className='stick'></span>
                                    <p>MMK {roomPrice}</p>
                                    <span className='stick'></span>
                                    <button className='btnBooking' onClick={(e) => isLogInHandler(e)}><RiBookMarkedLine size={15} /> Booking</button>
                                </div>
                        }

                    </div>
                </div>
            </div>


        </div>
    )
}


