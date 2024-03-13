import React, { useState } from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import FullSidebar from './FullSidebar';
import * as gr from 'react-icons/gr';
import * as md from 'react-icons/md';
import * as lu from 'react-icons/lu';
import * as tb from 'react-icons/tb';
import * as si from 'react-icons/si';
import * as gi from 'react-icons/gi';
import * as fa from 'react-icons/fa6';


const Dashboard = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Function to handle previous month
  const handlePreviousMonth = () => {
    setCurrentMonthIndex(prevIndex => (prevIndex === 0 ? months.length - 1 : prevIndex - 1));
  };

  // Function to handle next month
  const handleNextMonth = () => {
    setCurrentMonthIndex(prevIndex => (prevIndex === months.length - 1 ? 0 : prevIndex + 1));
  };

  // Get the current month
  const currentMonth = months[currentMonthIndex];

  // Placeholder data - Replace with actual data for each month
  const dashboardData = {
    January: { seminar: 10, conference: 15, teamMeet: 20, profit: 5000 },
    February: { seminar: 8, conference: 12, teamMeet: 18, profit: 6000 },
    March: { seminar: 12, conference: 20, teamMeet: 25, profit: 7000 },
    April: { seminar: 15, conference: 18, teamMeet: 22, profit: 5500 },
    May: { seminar: 14, conference: 16, teamMeet: 21, profit: 5800 },
    June: { seminar: 9, conference: 14, teamMeet: 19, profit: 6200 },
    July: { seminar: 11, conference: 19, teamMeet: 23, profit: 5300 },
    August: { seminar: 13, conference: 17, teamMeet: 24, profit: 5700 },
    September: { seminar: 16, conference: 21, teamMeet: 27, profit: 5100 },
    October: { seminar: 18, conference: 22, teamMeet: 28, profit: 5900 },
    November: { seminar: 20, conference: 25, teamMeet: 30, profit: 6300 },
    December: { seminar: 22, conference: 28, teamMeet: 32, profit: 6400 }
  };

  // Current month's data
  const currentMonthData = dashboardData[currentMonth];

  // Calculate total number of events
  const totalEvents = currentMonthData.seminar + currentMonthData.conference + currentMonthData.teamMeet;

  const seminarPercentage = (currentMonthData.seminar / totalEvents) * 100;
  const conferencePercentage = (currentMonthData.conference / totalEvents) * 100;
  const teamMeetPercentage = (currentMonthData.teamMeet / totalEvents) * 100;


  return (
    <div>
      <Navbar />
      <div className="flex">
        <FullSidebar />
        <div className="flex-1 relative overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-5">DASHBOARD</h1>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handlePreviousMonth} className="mr-2 h-7 w-7 px-1 text-sm font-semibold text-gray-500 rounded-full hover:bg-gray-400 focus:outline-none"><gr.GrFormPrevious /></button>
                <span className="mr-2 w-16 text-gray-900 dark:text-gray-400">{currentMonth}</span> {/* Adjust the width as needed */}
                <button onClick={handleNextMonth} className="mr-2 px-1 h-7 w-7 text-sm font-semibold text-gray-500 rounded-full hover:bg-gray-400 focus:outline-none"><md.MdOutlineNavigateNext /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className=" dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" style={{backgroundColor:'rgba(232, 7, 7, 0.2)'}}
               onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(232, 7, 7, 0.3)' }}
               onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(232, 7, 7, 0.2)' }}
             >
                <h2 className="text-xs font-semibold text-gray-600 dark:text-white">TOTAL EVENTS</h2>
                <div className='flex gap-24'>
                    <p className="text-3xl font-bold text-black dark:text-gray-200">{totalEvents}</p>
                    <div className='text-white text-lg p-2 rounded-full bg-red-600'><lu.LuLayoutDashboard /></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" style={{backgroundColor:'rgb(135, 206, 235, 0.3)'}}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(135, 206, 235, 0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(135, 206, 235, 0.3)' }}>
                <h2 className="text-xs font-semibold text-gray-600 dark:text-white">SEMINAR</h2>
                <div className='flex gap-24'>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-200">{currentMonthData.seminar}</p>
                    <div className='text-white text-lg p-2 rounded-full bg-blue-600'><fa.FaUserGroup/></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" style={{backgroundColor:'rgb(209, 130, 238, 0.3)'}}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(209, 130, 238, 0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(209, 130, 238, 0.3)' }}>
                <h2 className="text-xs font-semibold text-gray-600 dark:text-white">CONFERENCE</h2>
                <div className='flex gap-24'>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-200">{currentMonthData.conference}</p>
                    <div className='text-white text-lg p-2 rounded-full bg-[#d182ee]'><gi.GiVideoConference /></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"style={{backgroundColor:'rgb(225, 171, 45, 0.4)'}}
               onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(225, 171, 45, 0.5)' }}
               onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(225, 171, 45, 0.4)' }}>
                <h2 className="text-xs font-semibold text-gray-600 dark:text-white">MEETING</h2>
                <div className='flex gap-24'>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-200">{currentMonthData.teamMeet}</p>
                    <div className='text-white text-lg p-2 rounded-full bg-[#e1ab2d]'><si.SiGoogleclassroom /></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" style={{backgroundColor:'rgb(0, 128, 0, 0.3)'}}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(0, 128, 0, 0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(0, 128, 0, 0.3)' }}>
                <h2 className="text-xs font-semibold text-[#008000] dark:text-white">PROFIT</h2>
                <div className='flex gap-24'>
                    <p className="text-3xl font-bold text-[#008000] dark:text-green-300">₹{currentMonthData.profit}</p>
                    <div className='text-white text-lg p-2 rounded-full bg-[#008000] relative right-12'><tb.TbReportMoney /></div>
                </div>
              </div>
            </div>
            {/* Pie chart */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white my-12">EVENT DISTRIBUTION</h2>
              <div className="flex justify-center items-center">
                <div className="w-32 h-32 bg-blue-500 rounded-full flex justify-center items-center relative mr-8 cursor-pointer">
                  <div className="absolute w-32 h-32 border-4 border-white rounded-full" style={{ clipPath: `polygon(50% 0%, 100% 100%, 0% 100%)` }}></div>
                  <div className="absolute w-24 h-24 font-bold text-blue-700 bg-blue-200 rounded-full flex justify-center items-center">{seminarPercentage.toFixed(1)}%</div>
                </div>
                <div className="w-32 h-32 bg-[#d182ee] rounded-full flex justify-center items-center relative mr-8 cursor-pointer">
                  <div className="absolute w-32 h-32 border-4 border-white rounded-full" style={{ clipPath: `polygon(50% 0%, 100% 100%, 0% 100%)` }}></div>
                  <div className="absolute w-24 h-24 font-bold text-[#d182ee] bg-[#f4dcfc] rounded-full flex justify-center items-center">{conferencePercentage.toFixed(1)}%</div>
                </div>
                <div className="w-32 h-32 bg-yellow-500 rounded-full flex justify-center items-center relative cursor-pointer">
                  <div className="absolute w-32 h-32 border-4 border-white rounded-full" style={{ clipPath: `polygon(50% 0%, 100% 100%, 0% 100%)` }}></div>
                  <div className="absolute w-24 h-24 bg-yellow-200 text-yellow-600 font-bold rounded-full flex justify-center items-center">{teamMeetPercentage.toFixed(1)}%</div>
                </div>
              </div>
              <div className="flex gap-9 justify-center mt-2">
                <div className="w-32 flex justify-center items-center">
                  <p className="text-xs text-gray-500 dark:text-white">SEMINAR</p>
                </div>
                <div className="w-32 flex justify-center items-center">
                  <p className="text-xs text-gray-500 dark:text-white">CONFERENCE</p>
                </div>
                <div className="w-32 flex justify-center items-center">
                  <p className="text-xs text-gray-500 dark:text-white">MEETING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
