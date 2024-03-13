import React, { useState } from 'react';
import Footer from '../General/Footer';
import Navbar from '../General/Navbar';
import FullSidebar from './FullSidebar';
import { eventpost } from '../../Services/Eventpath';

export default function EventForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState('');
    const [maxParticipants, setMaxParticipants] = useState();
    const [totalAmount, setTotalAmount] = useState();
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [facilities, setFacilities] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value);
    };

    const handleMaxParticipantsChange = (event) => {
        setMaxParticipants(event.target.value);
    };

    const handleTotalAmountChange = (event) => {
        setTotalAmount(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleAddressLine1Change = (event) => {
        setAddressLine1(event.target.value);
    };

    const handleAddressLine2Change = (event) => {
        setAddressLine2(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleFacilitiesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setFacilities(prev => prev ? prev + `, ${value}` : value);
        } else {
            setFacilities(prev => prev.replace(`, ${value}`, '').replace(value, ''));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const formData = {
            "eventname":title,
            "description":description,
            "count":2,
            "charge":totalAmount,
            "address":addressLine1,
            "city":city,
            "pincode":postalCode,
            "facility":facilities
        }

        eventpost(formData);
        console.log('Form submitted:', formData);

        console.log('Form submitted:', {
            title, description, privacy, maxParticipants, totalAmount,
            addressLine1, addressLine2, city, state, postalCode, country,
            facilities
        });
    };

    return (
        <div>
            <Navbar/>
            <div className='flex'>
                <FullSidebar/>
                <div className='flex'>
                    <div className='p-28 mt-1'>
                        <img src="https://cdn.dribbble.com/users/460298/screenshots/3464705/animatedexplainer_scene1.gif" style={{ position: 'sticky', top: '76px' }}/>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full mx-10 pl-4 pr-4">
                        {/* <div>Create Event</div> */}
                        <br />
                        <div className="mb-5">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                placeholder="Please provide the title of your event"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea
                                id="description"
                                rows="4"
                                value={description}
                                onChange={handleDescriptionChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Leave a description of your event..."
                            ></textarea>
                        </div>
                        <div>
                            <h3 className="block mb-2 text-sm font-medium text-gray-900">Privacy</h3>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="private-event-radio"
                                            type="radio"
                                            value="private"
                                            name="event-type"
                                            checked={privacy === 'private'}
                                            onChange={handlePrivacyChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                        />
                                        <label htmlFor="private-event-radio" className="w-full py-3 ms-2">
                                            Private Event
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="public-event-radio"
                                            type="radio"
                                            value="public"
                                            name="event-type"
                                            checked={privacy === 'public'}
                                            onChange={handlePrivacyChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                        />
                                        <label htmlFor="public-event-radio" className="w-full py-3 ms-2">
                                            Public Event
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <br />
                        <div className='flex gap-20'>
                            <div className="mb-5">
                                <label htmlFor="maxParticipants" className="block mb-2 text-sm font-medium text-gray-900">Max Participants</label>
                                <input
                                    type="number"
                                    id="maxParticipants"
                                    value={maxParticipants}
                                    onChange={handleMaxParticipantsChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    placeholder="Max Participant"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="maxParticipants" className="block mb-2 text-sm font-medium text-gray-900">Total Amount</label>
                                <input
                                    type="number"
                                    id="totalAmount"
                                    value={totalAmount}
                                    onChange={handleTotalAmountChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    placeholder="Total Amount"
                                    required
                                />
                            </div>
                        </div>
                        <h4 className="block mb-2 text-sm font-medium text-gray-900">Facilities</h4>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                            <li className="w-full border-b border-gray-200 rounded-t-lg">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="culture-checkbox"
                                        type="checkbox"
                                        value="Catering Services"
                                        checked={facilities.includes('Catering Services')}
                                        onChange={handleFacilitiesChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                    />
                                    <label htmlFor="culture-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                        Catering Services
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="technology-checkbox"
                                        type="checkbox"
                                        value="Decor and Floral"
                                        checked={facilities.includes('Decor and Floral')}
                                        onChange={handleFacilitiesChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                    />
                                    <label htmlFor="technology-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                        Decor and Floral
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="music-checkbox"
                                        type="checkbox"
                                        value="Photography and Videography"
                                        checked={facilities.includes('Photography and Videography')}
                                        onChange={handleFacilitiesChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                    />
                                    <label htmlFor="music-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                        Photography and Videography
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="movies-checkbox"
                                        type="checkbox"
                                        value="Technical Support"
                                        checked={facilities.includes('Technical Support')}
                                        onChange={handleFacilitiesChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                    />
                                    <label htmlFor="movies-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                        Technical Support
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="onsite-staffing-checkbox"
                                        type="checkbox"
                                        value="On-site Staffing"
                                        checked={facilities.includes('On-site Staffing')}
                                        onChange={handleFacilitiesChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2"
                                    />
                                    <label htmlFor="onsite-staffing-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                                        On-site Staffing
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <br/>
                        <div className="mb-5">
                            <label htmlFor="addressLine1" className="block mb-2 text-sm font-medium text-gray-900">Address Line 1</label>
                            <input
                                type="text"
                                id="addressLine1"
                                value={addressLine1}
                                onChange={handleAddressLine1Change}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                placeholder="Address Line 1"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="addressLine2" className="block mb-2 text-sm font-medium text-gray-900">Address Line 2</label>
                            <input
                                type="text"
                                id="addressLine2"
                                value={addressLine2}
                                onChange={handleAddressLine2Change}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                placeholder="Address Line 2"
                                required
                            />
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City / District</label>
                                <input type="text" id="city" value={city} onChange={handleCityChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="City / District" required />
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                                <input type="text" id="state" value={state} onChange={handleStateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="State" required />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900">Postal Code</label>
                                <input type="text" id="postalCode" value={postalCode} onChange={handlePostalCodeChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Postal Code" required />
                            </div>
                            <div>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                                <input type="text" id="country" value={country} onChange={handleCountryChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:ring focus:ring-opacity-50" placeholder="Country" required />
                            </div>
                        </div>
                        <br />
                        <button type="submit" className=" mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create Event</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
