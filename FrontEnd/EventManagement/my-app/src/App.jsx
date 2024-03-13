import Landing from "./Components/General/Landing"
import Booked from "./Components/Admin/Booked"
import Home1 from "./Components/Admin/Home1"
import Events from "./Components/Admin/Events"
import Payment from "./Components/Organizer/Payment"
import { lazy } from "react"
import PaymentHistory from "./Components/Admin/PaymentHistory"
import Login from "./Components/General/Login"
import Register from "./Components/General/Register"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LazyLayout from "./Components/General/LazyLayout"
import Dashboard from "./Components/Admin/Dashboard"
import Logistics from "./Components/Admin/Logistics"
import EventForm from './Components/Admin/EventForm'

import OrgFullSideBar from "./Components/Organizer/OrgFullSidebar"
import OrgHome from "./Components/Organizer/OrgHome"
import OrgEvents from "./Components/Organizer/OrgEvents"
import OrgBooked from "./Components/Organizer/OrgBooked"
import OrgPayHistory from "./Components/Organizer/OrgPayHistory"
import OrgLogi from "./Components/Organizer/OrgLogi"
import Profile from "./Components/Organizer/Profile"
import BookForm from "./Components/Organizer/BookForm"

const lazyLogin = lazy(() => import("./Components/General/Login"));

function App() {

  return (

    <div>
          <Router>
              <Routes>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login"
                element={<LazyLayout component={lazyLogin} /> } ></Route>

                <Route path="/" element={<Landing/>} ></Route>
                <Route path="/home" element={<Home1/>} ></Route>
                <Route path="/events" element={<Events/>} ></Route>
                <Route path="/booked" element={<Booked/>} ></Route>
                <Route path="/payment" element={<Payment/>} ></Route>
                <Route path="/payhistory" element={<PaymentHistory/>} ></Route>
                <Route path="/dashboard" element={<Dashboard/>} ></Route>
                <Route path="/logistics" element={<Logistics/>} ></Route>
                <Route path="/eventform" element={<EventForm/>} ></Route>

                <Route path="/orgfull" element={<OrgFullSideBar/>} ></Route>
                <Route path="/orghome" element={<OrgHome/>} ></Route>
                <Route path="/orgevents" element={<OrgEvents/>} ></Route>
                <Route path="/orgbooked" element={<OrgBooked/>} ></Route>
                <Route path="/orgpayhis" element={<OrgPayHistory/>} ></Route>
                <Route path="/orglog" element={<OrgLogi/>} ></Route>
                <Route path="/profile" element={<Profile/>} ></Route>
                <Route path="/bookform" element={<BookForm/>}></Route>
              </Routes>
          </Router>
    </div>
  )
}

export default App
