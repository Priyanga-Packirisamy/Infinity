import React, { useState } from 'react';
import * as md from 'react-icons/md';
import Navbar from '../General/Navbar';
import FullSidebar from './FullSidebar';
import Footer from '../General/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { eventget } from '../../Services/Eventpath';
import { eventdel } from '../../Services/Eventpath';

export default function Events() {

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

  const handleDeleteClick = async (eventId) => {
    console.log(eventId);
    try {
      await eventdel(eventId);
      setUserData(userData.filter(booking => booking.id !== eventId));
      console.log('event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const [showEditForm, setShowEditForm] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  const Details = [
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    {
      ename: "Sharifoodeen",
      Location: "Coimbatore",
      type: "Conference",
      package: "$2000",
      count: 200,
      photo: "https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg"
    },
    // Other event details...
  ];

  const handleEditClick = (event) => {
    setEditedEvent(event);
    setShowEditForm(true);
  };

  const handleSubmit = (eventData) => {
    // Handle form submission, e.g., updating the event details
    console.log("Edited event details:", eventData);
    setShowEditForm(false);
  };

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <FullSidebar />
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('eventback.jpg')",
              filter: 'blur(5px)',
              zIndex: -1,
              height: 900
            }}
          />
          <div className="relative z-10">
            <center><h1 className="text-4xl font-bold text-blue-400 pt-12" style={{ fontFamily: 'cursive' }}>EVENT CATALOG SHOWCASE</h1></center>
            <div className="overflow-y-auto flex flex-wrap justify-center pt-8" style={{ maxHeight: 'calc(100vh - 0px)', overflowX: 'hidden', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
              {userData.map((event, index) => (
                <div className="w-1/5 p-4" key={index}>
                  <div className="bg-white bg-opacity-75 rounded-lg shadow-md overflow-hidden">
                    <div className='flex gap-12'>
                      <h3 className="pl-3 pt-3 text-lg font-semibold text-gray-800">{event.eventname}</h3>
                      <p className="pt-5 text-xs text-gray-600">${event.charge}</p>
                    </div>
                    <p className="text-xs pb-8 text-gray-400 pl-3">{event.city}</p>
                    <img src="https://www.tafelspitz-catering.de/images/EVENTS_slider/Events_2.jpg" alt="Event" className="w-28 mb-10 mx-auto h-28 object-cover object-center rounded-full" />
                    <div className="pt-4 pl-4">
                      <div className='flex my-2'>
                        <Link to="/logistics">
                          <button className="flex items-center px-2 py-1 mb-3 text-xs font-semibold text-gray-700 border-2 rounded-sm border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring">
                            VIEW
                            <md.MdArrowForward className="ml-1" />
                          </button>
                        </Link>
                        <div className="text-blue-500 rounded-md ml-16 mt-2 cursor-pointer" onClick={() => handleEditClick(event)}><md.MdEdit /></div>
                        <div onClick={() => handleDeleteClick(event.id)}  className="text-red-500 rounded-md ml-2 mt-2 cursor-pointer"><md.MdDelete /></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 pr-40">Edit Event</h2>
            <EditForm event={editedEvent} onSubmit={handleSubmit} onCancel={() => setShowEditForm(false)} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const EditForm = ({ event, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    ename: event.ename,
    Location: event.Location,
    type: event.type,
    package: event.package,
    count: event.count,
    photo: event.photo,
    // Add more properties as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
        <input type="text" name="ename" value={formData.ename} onChange={handleChange} className="text-sm mb-2 border border-gray-300 rounded px-3 py-1 w-full" />
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Location</label>
        <input type="text" name="Location" value={formData.Location} onChange={handleChange} className="text-sm mb-2 border border-gray-300 rounded px-3 py-1 w-full" />
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} className="text-sm mb-2 border border-gray-300 rounded px-3 py-1 w-full" />
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Count</label>
        <input type="text" name="count" value={formData.count} onChange={handleChange} className="text-sm mb-2 border border-gray-300 rounded px-3 py-1 w-full" />
        <label className="block text-gray-700 text-sm font-bold mb-2">Event Price</label>
        <input type="text" name="package" value={formData.package} onChange={handleChange} className="text-sm mb-2 border border-gray-300 rounded px-3 py-1 w-full" />
        {/* Add more input fields for other event details */}
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onCancel} className="text-sm mr-2 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
        <button type="submit" className="text-sm px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
      </div>
    </form>
  );
};
