import React, { useEffect, useState } from 'react'
import { deleteRoomById, getAllAvilableRoom, getAllRoom } from '../service/RoomService'
import { Link } from 'react-router-dom';
import { getUserId, isAdmin } from '../service/AuthService';
import { RiBardLine, RiCloseCircleLine, RiCloseLine, RiDoorOpenLine, RiLoginBoxLine, RiNumbersLine, RiPlaneLine, RiSparkling2Line, RiUserLine } from '@remixicon/react';
import FooterComponent from './FooterComponent';

export default function FindAllRoomComponent() {

    const [listRoom, setListRoom] = useState([]);

    const [model, setModel] = useState(false);
    const [roomId, setRoomId] = useState();
    const [positions, setPosition] = useState();

    const isAdminLar = isAdmin();
    const userId = getUserId();

    const [st, setst] = useState("");

    useEffect(() => {
        if (st == "available") {
            getAllAvilableRoomHandler();

        } else {
            listRooms();
        }
    }, [st])

    const listRooms = () => getAllRoom().then(res => setListRoom(res.data)).catch(err => console.log(err));

    const decidingDelete = (e, id) => {
        e.preventDefault();
        const rect = event.target.getBoundingClientRect();
        setPosition(rect.top + window.scrollY);
        setRoomId(id);
        setModel(true);
    }

    const deleteHandler = (e) => {
        if (e) {
            deleteRoomById(roomId).then(res => getAllRoom().then(res => setListRoom(res.data))).catch(err => console.log(err));
            setModel(false);
        } else {
            setModel(false);
        }
    }

    const getAllAvilableRoomHandler = () => {
        getAllAvilableRoom().then(res => setListRoom(res.data)).catch(err => console.log(err));
    }

    return (
        <>
            <section className="section_container popular_container">
                <h2 className="section_header"><RiBardLine color='blue' /> {st == "available" ? "Available Rooms" : "All Rooms"} <RiSparkling2Line color='blue' /></h2>
                <div className="add-roomCol3">
                    <select className='add-roomInput' onChange={(e) => setst(e.target.value)}>
                        <option value={""}>All Rooms</option>
                        <option value={"available"}>Avilable Room</option>
                    </select>
                </div>
                <div className="popular_grid">
                    {model && (<div>
                    <div className='overlay' ></div><div className="modal" style={{ top: positions}} >
                        <div className="modal-content">
                            <p className='model-text'><RiPlaneLine size={13} /> Are You Sure You Want To Delete this Room?</p>
                            <button className='model-btn ' onClick={() => deleteHandler(true)}><RiLoginBoxLine size={14} /> Delete</button>
                            <button className='model-btn' onClick={() => deleteHandler(false)}><RiCloseCircleLine size={13}/> No</button>
                        </div>
                    </div>
                </div>)}
                    {
                        listRoom.map(room => (

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
                                            {isAdminLar && (<button style={{ marginRight: 10, background: "blue" }} onClick={(e) => decidingDelete(e, room.id)} className='btnDetail btn'>Delete</button>)}
                                            {!isAdminLar ? <Link to={"/room-detail/" + room.id} className='btnDetail btn'>Details</Link> : <Link to={"/add-room/" + room.id + "/" + userId} style={{ background: "blue" }} className='btnDetail btn'>Update</Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                </div>
            </section>
            <FooterComponent />
        </>
    )
}
