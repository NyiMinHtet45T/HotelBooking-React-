import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getUserById } from '../service/UserService';
import { RiDoorLine, RiEmpathizeFill, RiEmpathizeLine, RiGitRepositoryLine, RiIdCardLine, RiLockLine, RiMailLine, RiPhoneLine } from '@remixicon/react';

export default function AdminComponent() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roleName, setRoleName] = useState("");

  const { id } = useParams();
  const nevigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getUserById(id).then(res => addAdminOrUserInfo(res.data)).catch(err => console.log(err));
  }

  const addAdminOrUserInfo = (adUsObj => (
    setName(adUsObj.name),
    setUserName(adUsObj.username),
    setEmail(adUsObj.email),
    setPhoneNumber(adUsObj.phoneNumber),
    setRoleName(adUsObj.roleName)
  ))

  return (
    <div>
      <div className='add_room_container' style={{ top: 130 }}>
        <h1 style={{ marginLeft: 20 }}><RiLockLine /> Admin</h1>
        <hr style={{ margin: 20 }} />
        <div className="add-roomFlex">

          <div className="add-roomCol9" style={{ marginLeft: 110 }}>
            <div className="add-roomFlex">
              <div className="add-roomCol3">
                <label><RiEmpathizeLine size={14} /> Name : <span className='ts-color'>{name}</span></label>
              </div>
              <span className='stick' style={{ marginLeft: 100 }}></span>
              <div className="add-roomCol3" style={{ marginLeft: 300 }}>
                <label><RiEmpathizeFill size={14} /> Username : <span className='ts-color'>{username}</span></label>
              </div>
            </div><br />
            <div className="add-roomFlex">
              <div className="add-roomCol3">
                <label ><RiPhoneLine size={14} /> phoneNumber : <span className='ts-color'>{phoneNumber}</span></label>
              </div>
              <span className='stick' style={{ marginLeft: 100 }}></span>
              <div className="add-roomCol3" style={{ marginLeft: 300 }}>
                <label><RiMailLine size={14} /> email : <span className='ts-color'>{email}</span></label>
              </div>
            </div><br />
            <div className="add-roomFlex">
              <div className="add-roomCol3">
                <label ><RiIdCardLine size={14} /> UserRole : <span className='ts-color'>{roleName}</span></label>
              </div>
              <span className='stick' style={{ marginLeft: 100 }}></span>
              <div className="add-roomCol3" style={{ marginLeft: 250 }}>
                <div className="add-roomFlex">
                  <button onClick={() => nevigate("/add-room/0/" + id)} style={{ width: 120 }} className='model-btn'><RiDoorLine size={14} /> Add Room</button>
                  <button onClick={() => nevigate("/show-allbooking/" + id)} style={{ width: 120 }} className='model-btn'><RiGitRepositoryLine size={14} /> Show All Booking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ margin: 20 }} />
      </div>
    </div>
  )
}
