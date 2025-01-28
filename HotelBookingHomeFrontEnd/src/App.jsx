import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import FindAllRoomComponent from './component/FindAllRoomComponent'
import HeaderRoomSearchComponent from './component/HeaderRoomSearchComponent'
import NavbarComponent from './component/NavbarComponent'
import RoomDetaiComponent from './component/RoomDetaiComponent'
import LoginComponent from './component/LoginComponent'
import { isUserLogIn } from './service/AuthService'
import AddRoomComponent from './component/AddRoomComponent'
import AdminComponent from './component/AdminComponent'
import ShowAllBooking from './component/ShowAllBooking'
import UserInfoComponent from './component/UserInfoComponent'
import ContentComponent from './component/ContentComponent'
import FindBookingConfirmationCode from './component/FindBookingConfirmationCode'





function App() {

  function AuthenticatedRoute({children}) {
    const isAuth = isUserLogIn();
    if(isAuth) {
      return children;
    }else {
      return <Navigate to="/login/0"/>
    }
  } 



  return (
    <>
      <BrowserRouter>
          <NavbarComponent/>
            
            <Routes>
              <Route path='/bookingConfirmation' element={<FindBookingConfirmationCode/>}></Route>
              <Route path='/' element={<HeaderRoomSearchComponent/>}></Route>
              <Route path='/rooms' element={<FindAllRoomComponent/>}></Route>
              <Route path='/room-detail/:id' element={<RoomDetaiComponent/>}></Route>
              <Route path='/login/:id' element={<LoginComponent/>}></Route>
              <Route path='/add-room/:id/:adminId' element={<AddRoomComponent/>}></Route>
              <Route path='/show-allbooking/:id' element={<ShowAllBooking/>}></Route>
              <Route path='/admin/:id' element={<AdminComponent/>}></Route>
              <Route path='/userInfo/:id' element={<UserInfoComponent/>}></Route>
              <Route path='/content' element={<ContentComponent/>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
