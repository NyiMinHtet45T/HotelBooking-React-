import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addRoomByRoomAndPhoto, getRoomById, getRoomPhotUrl, updateRoomById } from '../service/RoomService';
import { RiArrowTurnBackLine, RiDoorOpenLine, RiImageLine, RiNumbersLine, RiSlideshowView, RiUserLine, RiWalletLine } from '@remixicon/react';

export default function AddRoomComponent() {
  const [roomPhotoUrl1, setRoomPhotoUrl1] = useState();
  const [roomPhotoUrl2, setRoomPhotoUrl2] = useState();
  const [roomPhotoUrl3, setRoomPhotoUrl3] = useState();
  const [roomPhotoUrl4, setRoomPhotoUrl4] = useState();

  const [roomMainUrl, setRoomMainUrl] = useState();
  const [roomType, setRoomType] = useState();
  const [roomPrice, setRoomPrice] = useState(0);
  const [population, setPopulation] = useState(0);
  const [roomNumber, setRoomNumber] = useState();
  const [roomDescription, setRoomDescription] = useState();

  const [previewFile1, setPreviewFile1] = useState();
  const [previewFile2, setPreviewFile2] = useState();
  const [previewFile3, setPreviewFile3] = useState();
  const [previewFile4, setPreviewFile4] = useState();
  const [previewMainFile, setPreviewMainFile] = useState();

  const { adminId } = useParams();
  const { id } = useParams();
  const nevigate = useNavigate();

  const addMainPhoto = (e) => {
    const photo = e.target.files[0].name;
    setPreviewMainFile(photo);
    setRoomMainUrl(photo);
  }

  const addPhoto1 = (e) => {
    const photo = e.target.files[0].name;
    setPreviewFile1(photo);
    setRoomPhotoUrl1(photo);
  }

  const addPhot2 = (e) => {
    const photo = e.target.files[0].name;
    setPreviewFile2(photo);
    setRoomPhotoUrl2(photo);
  }

  const addPhot3 = (e) => {
    const photo = e.target.files[0].name;
    setPreviewFile3(photo);
    setRoomPhotoUrl3(photo);
  }

  const addPhot4 = (e) => {
    const photo = e.target.files[0].name;
    setPreviewFile4(photo);
    setRoomPhotoUrl4(photo);
  }

  const addRoom = (e) => {
    e.preventDefault();
    const roomDto = { roomType, roomPrice, roomMainUrl, population, roomNumber, roomDescription };
    const roomPhotoUrl = { roomPhotoUrl1, roomPhotoUrl2, roomPhotoUrl3, roomPhotoUrl4 };
    const roomAndPhotoObj = { "roomDto": roomDto, "roomPhotoUrl": roomPhotoUrl };
    if (id > 0) {
      updateRoomById(id, roomAndPhotoObj).then(res => window.alert("Update Room Successfully")).then(() => nevigate("/rooms")).catch(err => console.log(err));
    } else {
      addRoomByRoomAndPhoto(roomAndPhotoObj).then(res => window.alert("Adding Room Successfully")).catch(err => console.log(err));
    }
  }

  useEffect(() => {
    getRoom();
  }, []);

  const getRoom = () => {
    if (id > 0) {
      getRoomById(id).then(res => {
        addRoomDetail(res.data);
      }).catch(err => console.log(err));
    }
  }

  const addRoomDetail = (roomObj) => {

    setPreviewMainFile(roomObj.roomMainUrl);
    setRoomMainUrl(roomObj.roomMainUrl);

    setRoomType(roomObj.roomType);
    setRoomPrice(roomObj.roomPrice);
    setPopulation(roomObj.population);
    setRoomNumber(roomObj.roomNumber);
    setRoomDescription(roomObj.roomDescription);
    getRoomPhoto(roomObj.roomPhotoId);
  }

  const getRoomPhoto = (photoId) => {
    getRoomPhotUrl(photoId).then(res => addRoomPhoto(res.data)).catch(err => console.log(err));
  }

  const addRoomPhoto = (photoObj) => {
    
    setPreviewFile1(photoObj.roomPhotoUrl1);
    setRoomPhotoUrl1(photoObj.roomPhotoUrl1);

    setPreviewFile2(photoObj.roomPhotoUrl2);
    setRoomPhotoUrl2(photoObj.roomPhotoUrl2);

    setPreviewFile3(photoObj.roomPhotoUrl3);
    setRoomPhotoUrl3(photoObj.roomPhotoUrl3);

    setPreviewFile4(photoObj.roomPhotoUrl4);
    setRoomPhotoUrl4(photoObj.roomPhotoUrl4);
  }

  return (
    <>
      <div className='add_room_container' style={{ top: 90 }}>
        <h1 style={{ marginLeft: 20 }}>{id > 0 ? "Update Room ⛩️" : "Add Room 🎗️"}</h1>
        <hr style={{ margin: 20 }} />
        <form>
          <div>
            <div>
              <div className="add-roomFlex">
                <div className="add-roomCol3">
                  <label className='add-roomlabel'><RiImageLine size={13} /> MainPhoto</label><br />
                  <img src={`/image/${previewMainFile}`} style={{ width: '300px', height: 'auto', marginLeft: 20 }} />
                  <input type="file" className='add-roomInput btnBooking' style={{ marginTop: 20 }} accept='image/*' onChange={addMainPhoto} />
                </div>
                <span className='stick' style={{ marginLeft: 70 }}></span>
                <div className="add-roomCol9" style={{ marginLeft: 110 }}>
                  <div className="add-roomCol3" style={{ width: 720 }}>
                    <label ><RiSlideshowView size={13} /> RoomDescription</label>
                    <input className='add-roomInput' type="text" value={roomDescription} onChange={(e) => setRoomDescription(e.target.value)} />
                  </div><br />
                  <div className="add-roomFlex">
                    <div className="add-roomCol3">
                      <label><RiDoorOpenLine size={13} /> RoomType</label>
                      <select className='add-roomInput' value={roomType} onChange={e => setRoomType(e.target.value)}>
                        <option value="Standard">Standard</option>
                        <option value="Superior">Superior</option>
                        <option value="Family">Family</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Sea View">Sea View</option>
                        <option value="Luxury">Luxury</option>
                      </select>
                    </div>
                    <div className="add-roomCol3">
                      <label><RiNumbersLine size={13} /> RoomNo.</label>
                      <input className='add-roomInput' type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
                    </div>
                  </div><br />
                  <div className="add-roomFlex">
                    <div className="add-roomCol3">
                      <label><RiUserLine size={13} /> Population</label>
                      <input className='add-roomInput' type="text" value={population} onChange={(e) => setPopulation(e.target.value)} />
                    </div>
                    <div className="add-roomCol3">
                      <label ><RiWalletLine size={13} /> RoomPrice</label>
                      <input className='add-roomInput' type="text" value={roomPrice} onChange={(e) => setRoomPrice(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ margin: 20 }} />
            <div>
              <div className="add-roomFlex">
                <div className="add-roomCol3">
                  <label className='add-roomlabel' style={{ marginLeft: 110 }}><RiImageLine size={13} /> Room Photo 1</label><br />
                  <img src={`/image/${previewFile1}`} style={{ width: '250px', height: 'auto', marginLeft: 20 }} />
                  <input type="file" className='add-roomInput btnBooking' style={{ marginTop: 10, width: 280 }} accept='image/*' onChange={addPhoto1} />
                </div>
                <span className='stick' style={{ marginLeft: 0 }}></span>
                <div className="add-roomCol3">
                  <label className='add-roomlabel' style={{ marginLeft: 110 }}><RiImageLine size={13} /> Room Photo 2</label><br />
                  <img src={`/image/${previewFile2}`} style={{ width: '250px', height: 'auto', marginLeft: 20 }} />
                  <input type="file" className='add-roomInput btnBooking' style={{ marginTop: 10, width: 280 }} accept='image/*' onChange={addPhot2} />
                </div>
                <span className='stick' style={{ marginLeft: 0 }}></span>
                <div className="add-roomCol3">
                  <label className='add-roomlabel' style={{ marginLeft: 110 }}><RiImageLine size={13} /> Room Photo 3</label><br />
                  <img src={`/image/${previewFile3}`} style={{ width: '250px', height: 'auto', marginLeft: 20 }} />
                  <input type="file" className='add-roomInput btnBooking' style={{ marginTop: 10, width: 280 }} accept='image/*' onChange={addPhot3} />
                </div>
                <span className='stick' style={{ marginLeft: 0 }}></span>
                <div className="add-roomCol3">
                  <label className='add-roomlabel' style={{ marginLeft: 110 }}><RiImageLine size={13} /> Room Photo 4</label><br />
                  <img src={`/image/${previewFile4}`} style={{ width: '250px', height: 'auto', marginLeft: 20 }} />
                  <input type="file" className='add-roomInput btnBooking' style={{ marginTop: 10, width: 280 }} accept='image/*' onChange={addPhot4} />
                </div>
              </div>
            </div>
            <hr style={{ margin: 20 }} />
            <div className="add-roomFlex">
              <small style={{ marginLeft: 20 }}>⚠️Before Adding Your Photo You Need To Add That Photo To the public/image/<span style={{ color: 'red' }}>⟦your photo⟧</span> First! <br />⚠️If You Don't the Photo will not Be Shown!☺️ or Preview</small>
              <button onClick={() => nevigate("/admin/" + adminId)} style={{ marginLeft: 500 }} className='model-btn'><RiArrowTurnBackLine size={13} /> Return</button>
              <button className='model-btn' onClick={(e) => addRoom(e)} style={{ marginLeft: 3 }}>{id > 0 ? "Update Room" : "Add Room"}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
