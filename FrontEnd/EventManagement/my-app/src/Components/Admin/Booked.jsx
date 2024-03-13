import React, { useState } from 'react';
import * as ai from 'react-icons/ai';
import * as md from 'react-icons/md';
import Navbar from '../General/Navbar';
import FullSidebar from './FullSidebar';
import Footer from '../General/Footer';
import { useEffect } from 'react';
import { bookget } from '../../Services/Bookpath';
import { bookdel } from '../../Services/Bookpath';
import { bookput } from '../../Services/Bookpath';

const Booked = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await bookget();
        console.log(response.data.book);
        setUserData(response.data.book || []);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const [bookingid, setBookingid] = useState('');
  const [eventid, setEventid] = useState('');
  const [orgid, setOrgid] = useState('');
  const [bookdate, setBookdate] = useState('');
  const [eventdate, setEventdate] = useState('');
  const [statuss, setStatuss] = useState('');
  const [city, setCity] = useState('');
  const [count, setCount] = useState(0);
  const [paid, setPaid] = useState(0);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = {
      "eventid":eventid,
      "orgid":orgid,
      "bookdate":bookdate,
      "eventdate":eventdate,
      "status":statuss,
      "city":city,
      "count":count,
      "paid":paid,
    }

    try{

    console.log(formData);
    console.log(bookingid);
      await bookput(bookingid, formData)
    }
    catch(error){
      console.log("Error in updating booking"+error);
    }


    setShowForm(false)
  };

  const handleDeleteClick = async (bookingId) => {
    console.log(bookingId);
    try {
      await bookdel(bookingId);
      setUserData(userData.filter(booking => booking.bid !== bookingId));
      console.log('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
    window.location.reload();
  };

  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleEditClick = (product) => {
    setEventid(product.eventid);
    setOrgid(product.orgid);
    setBookdate(product.bookdate);
    setEventdate(product.eventdate);
    setStatuss(product.status);
    setCity(product.city);
    setCount(product.count);
    setPaid(product.paid);
    setBookingid(product.id);
    setShowForm(true);
  };

  const products = [
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Priya",
      sdate: "Jan 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    }
  ];

  const bookingStatusOptions = ['Pending', 'Verified', 'Booked'];

  const filteredProducts = products.filter(product =>
    product.uname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(a.sdate) - new Date(b.sdate);
    } else if (sortOption === 'status') {
      return bookingStatusOptions.indexOf(a.type) - bookingStatusOptions.indexOf(b.type);
    } else if (sortOption === 'headCount') {
      return a.count - b.count;
    }
    return 0;
  });

  const handleSortChange = (option) => {
    setSortOption(option);
  };



  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <FullSidebar/>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className=''>
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{paddingRight:840}}
              className="border text-sm border-gray-300 rounded-md px-3 py-1 m-4 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
            {/* Sort dropdown */}
            <div className="relative inline-block text-left mb-4">
              <select
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border text-gray-400 text-sm border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              >
                <option value="">SORT BY</option>
                <option value="date">Date</option>
                <option value="status">Booking Status</option>
                <option value="headCount">Head Count</option>
              </select>
            </div>
          </div>
          <table className="font-Times New Roman w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  EVENT ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Org ID
                </th>
                <th scope="col" className="px-6 py-3">
                  UserName
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Data
                </th>
                <th scope="col" className="px-6 py-3">
                  Booking Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Head Count
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='text-xs'>
              {userData.map((product, index) => (
                <tr
                key={product.bid}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600`}
              >
                  <td className="px-6 ">{product.eventid}</td>
                  <td className="px-6 ">{product.orgid}</td>
                  <td className="px-6 ">mega</td>
                  <td className="px-6 ">{product.bookdate}</td>
                  <td className="px-6 ">{product.eventdate}</td>
                  <td className="px-6 ">
                    <span className={product.status === 'Pending' ? 'text-yellow-500' : (product.status === 'Verified' ? 'text-green-500' : 'text-red-500')}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 ">{product.count}</td>
                  <td className="px-6 ">{product.paid}</td>
                  <td className="flex items-center px-6 py-4">
                    {/* Edit button */}
                    <button onClick={() => handleEditClick(product)}className="text-sm font-normal text-blue-600 dark:text-blue-500 hover:underline">
                      <md.MdEdit />
                    </button>
                    {/* Delete button */}
                    <button onClick={() => handleDeleteClick(product.id)} className="text-lg font-normal text-red-600 dark:text-red-500 hover:underline ms-3">
                      <ai.AiFillDelete />
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg">
                {/* Your form content goes here */}
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
          <button onClick={() => setShowForm(false)} className="mt-4 text-lg text-gray-600 rounded-lg ml-80  pl-36"><ai.AiOutlineCloseCircle /></button>
            <form onSubmit={handleSubmit}>

              <div className='flex gap-6'>
                <div className="mb-4">
                  <label htmlFor="EventId" className="block text-sm font-medium text-gray-700">Event ID</label>
                  <input type="text" id="eventId" value={eventid} onChange={(e) => setEventid(e.target.value)} className=" bg-gray-100 mt-3 px-8 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="organiserId" className="block text-sm font-medium text-gray-700">Organiser ID</label>
                  <input type="text" id="orgId" value={orgid} onChange={(e) => setOrgid(e.target.value)} className=" bg-gray-100 mt-3 px-8 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div className='flex gap-16'>
                <div className="mb-4">
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
                  <input type="date" id="eventDate" value={eventdate} onChange={(e) => setEventdate(e.target.value)} className="text-gray-400 bg-gray-100 mt-1 pl-2 py-2 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="bookDate" className="block text-sm font-medium text-gray-700">Book Date</label>
                  <input type="date" id="bookDate" value={bookdate} onChange={(e) => setBookdate(e.target.value)} className="text-gray-400 bg-gray-100 mt-1 pl-2 py-2 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div className='flex gap-16'>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Staus</label>
                  <input type="text" id="statuss" value={statuss} onChange={(e) => setStatuss(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div className='flex gap-16'>
                <div className="mb-4">
                  <label htmlFor="count" className="block text-sm font-medium text-gray-700">Count</label>
                  <input type="number" id="count" value={count} onChange={(e) => setCount(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="paid" className="block text-sm font-medium text-gray-700">Paid</label>
                  <input type="text" id="paid" value={paid} onChange={(e) => setPaid(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-48 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Booked;
