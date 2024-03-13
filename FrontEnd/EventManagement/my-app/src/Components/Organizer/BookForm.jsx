import React, { useState } from 'react';
import Navbar from '../General/Navbar';
import OrgFullSidebar from './OrgFullSidebar';
import Footer from '../General/Footer';
import { bookpost } from '../../Services/Bookpath';

export default function BookForm() {

    const [formData, setFormData] = useState({
        eventid: '',
        orgid:'',
        bookdate:'',
        eventdate:'',
        status:'',
        city:'Chennai',
        count:0,
        paid:1000
    });


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'number' ? +value : value;
        setFormData({
          ...formData,
          [name]: newValue,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        bookpost(formData);
        console.log('Form submitted:', formData);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            eventid: '',
            orgid:'',
            bookdate:'',
            eventdate:'',
            status:'Pending',
            city:'Chennai',
            count:0,
            paid:0
        });
    };

    return (
        <div>
            <Navbar/>
            <div className='flex'>
                <OrgFullSidebar/>
                <div className='px-12 py-20'><img src="https://cdn.dribbble.com/users/1047273/screenshots/6558495/02-pins-animated.gif"/></div>
                    <div className='w-full m-12'>
                        <form onSubmit={handleSubmit} className="pl-10 pr-10">
                            <div className='flex gap-28'>
                                <div className="mb-2">
                                    <label htmlFor="eventId" className="block mb-2 text-sm font-medium text-gray-900">Event ID</label>
                                    <input
                                        type="text"
                                        id="eventid"
                                        name="eventid"
                                        value={formData.eventid}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        placeholder="Event ID"
                                        required
                                    />
                                </div>
                                {/* Organizer ID */}
                                <div className=" ml-8">
                                    <label htmlFor="orgId" className="block mb-2 text-sm font-medium text-gray-900">Organizer ID</label>
                                    <input
                                        type="text"
                                        id="orgid"
                                        name="orgid"
                                        value={formData.orgid}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        placeholder="Organizer ID"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex gap-32'>
                                <div className="mb-5">
                                    <label htmlFor="peopleCount" className="block my-4 text-sm font-medium text-gray-900">People Count</label>
                                    <input
                                        type="number"
                                        id="count"
                                        name="count"
                                        value={formData.count}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        required
                                        placeholder="No of Participants"
                                    />
                                </div>
                                <div className="mb-5 ml-2">
                                    <label htmlFor="Organizername" className="block my-4 text-sm font-medium text-gray-900">Organizer Name</label>
                                    <input
                                        type="text"
                                        id="orgname"
                                        name="orgname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        required
                                        placeholder="Organizer Name"
                                    />
                                </div>
                            </div>
                            {/* Booking Date */}
                            {/* Similar pattern for other fields */}
                            {/* Booking Date */}
                            <div className='flex gap-28'>
                                <div className="mb-5">
                                    <label htmlFor="bookingDate" className=" block mb-2 text-sm font-medium text-gray-900">Booking Date</label>
                                    <input
                                        type="date"
                                        id="bookdate"
                                        name="bookdate"
                                        value={formData.bookdate}
                                        onChange={handleInputChange}
                                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-44 p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                {/* Event Date */}
                                <div className="mb-5 ml-2">
                                    <label htmlFor="eventDate" className="block mb-2 text-sm font-medium text-gray-900">Event Date</label>
                                    <input
                                        type="date"
                                        id="eventdate"
                                        name="eventdate"
                                        value={formData.eventdate}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block w-44 p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Status */}
                            <div className='flex gap-28'>
                                <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block w-44 p-2.5 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Verified">Verified</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>

                                </div>
                                <div className='ml-2'>
                                    <label htmlFor="paymentStatus" className="block mb-2 text-sm font-medium text-gray-900">Payment Status</label>
                                    <select
                                        tyoe="number"
                                        id="paid"
                                        name="paid"
                                        value={formData.paid}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:border-blue-500 block w-44 p-2.5 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        <option value="unpaid">Unpaid</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </div>
                            </div>
                            {/* People Count */}

                            <button type="submit" className="ml-40 mt-10 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Submit
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                            {/* Payment Status */}

                            {/* Your existing form fields */}
                            {/* Add submit button and closing form tag */}
                        </form>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}
