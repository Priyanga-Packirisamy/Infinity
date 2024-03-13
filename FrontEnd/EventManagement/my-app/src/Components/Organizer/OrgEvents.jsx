import React from 'react'
import * as md from 'react-icons/md';
import Navbar from '../General/Navbar';
import OrgFullSidebar from './OrgFullSidebar';
import Footer from '../General/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { eventget } from '../../Services/Eventpath';
import { useState } from 'react';

const EventCard = ({ event }) => {

  return (
    <div className="w-1/5 p-4">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-md overflow-hidden">
        <div className='flex gap-12'>
          <h3 className="pl-3 pt-3 text-lg font-semibold text-gray-800">{event.eventname}</h3>
          <p className= "pt-5 text-xs text-gray-600">${event.charge}</p>
        </div>
        <p className=" text-xs pb-8  text-gray-400 pl-3">{event.city}</p>
        <img src="https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg" alt="Event" className="w-28 mb-10 mx-auto h-28 object-cover object-center rounded-full" />
        <div className="pt-4 pl-4">
          <div className='flex my-2'>
          <Link to="/orglog">
            <button className=" flex items-center px-2 py-1 mb-3 text-xs font-semibold text-gray-700 border-2 rounded-sm border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring">
                EXPLORE
                <md.MdArrowForward className=" ml-1" />
              </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OrgEvents() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await eventget();
        console.log(response);
        setUserData(response.data.events || []);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const Details = [
    {
      ename:"Sharifoodeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifoodeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifoodeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifoodeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifoodeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifudeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifudeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifudeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifudeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename:"Sharifudeen",
      Location:"Coimbatore",
      type:"Conference",
      package:"$2000",
      count:200,
      photo:"https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
  ]

  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <OrgFullSidebar/>
        <div className="relative">
          {/* Blurred background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('eventback.jpg')",
              filter: 'blur(5px)',
              zIndex: -1,
              height:900
            }}
          />
          {/* Content */}
            <div className="relative z-10">
              {/* Your content */}
              <center><h1 className="text-4xl font-bold text-blue-400 pt-12" style={{fontFamily:'cursive'}}>EVENT CATALOG SHOWCASE</h1></center>
              <div className="flex flex-wrap justify-center pt-8">
              {userData.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
