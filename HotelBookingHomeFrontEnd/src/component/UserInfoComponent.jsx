import React, { useEffect, useState } from 'react'
import { getUserHistorybyId } from '../service/UserService';
import { useParams } from 'react-router';
import { RiBardFill, RiCalendarLine, RiCloudOffLine, RiContactsBookLine, RiDoorOpenLine, RiMailLine, RiTeamLine, RiUser3Line, RiWalletLine } from '@remixicon/react';

export default function UserInfoComponent() {

    const [userHistoryList, setHIstory] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getUserHistory()
    }, [])

    const getUserHistory = () => {
        getUserHistorybyId(id).then(res => setHIstory(res.data)).catch(err => console.log(err));
    }

    return (
        <div>
            <h2 className="section_header" style={{ marginTop: 100 }}><RiContactsBookLine /> Booking Details</h2>
            {
                userHistoryList.length > 0 && (<div>{
                    userHistoryList.map((item, index) => (
                        <div key={item.id}>
                            <div className='add_room_container' style={{ marginTop: 20, marginBottom: 20 }}>
                                <h3 style={{ marginLeft: 20 }}><RiBardFill color='red' /> Booking {index + 1}</h3>
                                <hr style={{ margin: 8 }} />
                                <div>
                                </div>
                                <div className='add-roomFlex'>
                                    <img src={`/image/${item.roomPhotoMain}`} style={{ width: '300px', height: 'auto', borderRadius: 20 }} />
                                    <div className="add-roomCol9" style={{ marginLeft: 30, marginTop: 20 }}>
                                        <div className="add-roomFlex">
                                            <div className="add-roomCol3 ">
                                                <div className="add-roomFlex">
                                                    <label><RiUser3Line size={13} /> Username : <span className='ts-color'>{item.userName}</span></label>
                                                </div>
                                            </div>
                                            <div className="add-roomCol3">
                                                <div className="add-roomFlex">
                                                    <label><RiDoorOpenLine size={13} /> Room Type : <span className='ts-color'>{item.roomType}</span></label>
                                                </div>
                                            </div>
                                            <div className="add-roomCol3">
                                                <div className="add-roomFlex">
                                                    <label><RiTeamLine size={13} /> Total : <span className='ts-color'>{item.totalNumberOfAdults}</span> </label>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className="add-roomFlex">
                                            <div className="add-roomCol3 ">
                                                <div className="add-roomFlex">
                                                    <label><RiMailLine size={13} /> Email : <span className='ts-color'>{item.email}</span></label>
                                                </div>
                                            </div>
                                            <div className="add-roomCol3">
                                                <div className="add-roomFlex">
                                                    <label><RiWalletLine size={13} /> Room Price : <span className='ts-color'>MMK {item.roomPrice}</span></label>
                                                </div>
                                            </div>
                                            <div className="add-roomCol3">
                                                <div className="add-roomFlex">
                                                    <label><RiCalendarLine size={13} /> CheckInDate : <span className='ts-color'>{item.checkInDate}</span></label>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className="add-roomFlex">
                                            <div className="add-roomCol3"></div>
                                            <div className="add-roomCol3"></div>
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
                }</div>)
            }
            {
                userHistoryList.length == 0 && (<div>
                    <h1 style={{ color: 'red', textAlign: 'center', marginTop: 40, fontSize: 40, backgroundColor: 'ButtonShadow', padding: 30 }}><RiCloudOffLine size={33} /> No Content</h1>
                </div>)
            }
        </div>
    )
}
