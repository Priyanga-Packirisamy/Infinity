import React, {useState} from 'react';
import * as gi from 'react-icons/gi';
import * as md from 'react-icons/md';
import * as gr from 'react-icons/gr';
import FullSidebar from './FullSidebar';
import Footer from '../General/Footer';
import Navbar from '../General/Navbar';

function Home1() {

  const reviews = [
    { id: 1, message: "Great service, highly recommend!" },
    { id: 2, message: "Amazing experience, will definitely come back!" },
    { id: 3, message: "Very satisfied with the results." },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Function to handle clicking the next button
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle clicking the previous button
  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <Navbar/>



    <div className='flex'>
      <FullSidebar/>
      <div>
        <div style={{backgroundImage:`url("landf.jpg")`, height:520}}>
              <div style={{backgroundColor:"rgb(0, 0, 0,0.3)", height:520,width:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div><center>
                    <div className='text-white text-9xl'><gi.GiInfinity /></div>
                    <div className='text-white text-4xl font-bold' >I N F I N I T Y </div>
                    <div className="flex gap-6">
                      <a className="inline-block mx-20 my-10 px-5 py-2 text-base font-l font-semibold text-white border-2 border-white hover:bg-transparent hover:text-white focus:outline-none focus:ring">
                        WELCOME !
                      </a>
                  </div>
                   </center></div>
              </div>
        </div>
        <div className='bg-gray-200'>
          <div>
            <div className='pt-20 text-lg'><center>UNPARALLELED, STRESS-FREE</center></div>
            <div className='my-5 text-3xl font-bold tracking-wider'><center>EVENT PLANNING & DESIGN</center></div>
            <center className='mx-20 text-sm text-gray-500 py-5' style={{fontFamily:"Times New Roman"}}>
              <div>The Infinity experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.</div>
              <div className="py-3" >With us, customization is guaranteed. You'll be paired with an Infinity Event Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors in Nashville and take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more.</div>
              <div className='py-3'>When it’s showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.</div>
              <button className='bg-gray-800 px-7 py-3 text-white my-5'>FIND OUT MORE</button>
            </center>
          </div>
        </div>
        <div>
        <div className='flex gap-6 py-10'>
          <div className="text-center p-4  rounded-lg">
            <div className="text-lg font-semibold">SEMINAR</div>
            <img src="seminar.jpg" className="rounded-full mx-auto mt-4" style={{ width: "200px", height: "200px" }} alt="Seminar" />
            <div className="mt-4 text-gray-500 text-sm " style={{fontFamily:"Times New Roman"}}>With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.</div>
          </div>
          <div className="text-center p-4  rounded-lg ">
            <div className="text-lg font-semibold">TEAM MEET</div>
            <img src="team.jpg" className="rounded-full mx-auto mt-4" style={{ width: "200px", height: "200px" }} alt="Team Meet" />
            <div className="mt-4 text-gray-500 text-sm " style={{fontFamily:"Times New Roman"}}>With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.</div>
          </div>
          <div className="text-center p-4 rounded-lg ">
            <div className="text-lg font-semibold">CONFERENCE</div>
            <img src="confe.jpg" className="rounded-full mx-auto mt-4" style={{ width: "200px", height: "200px" }} alt="Conference" />
            <div className="mt-4 text-gray-500 text-sm " style={{fontFamily:"Times New Roman"}}>With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.</div>
          </div>
        </div>
            <div>
              <center>
                <div className="py-20 bg-gray-100">
                  <div className="text-lg">TESTIMONALS FROM OUR </div>
                  <div className='text-6xl font-semi-bold p-6 tracking-wider'>HAPPY CLIENTS</div>
                  <div className="flex justify-between">
                    <button onClick={prevReview} className=" ml-20 px-3 py-1 h-10 w-10 text-sm font-semibold bg-gray-300 text-white rounded-full hover:bg-gray-400 focus:outline-none">
                    <gr.GrFormPrevious />
                    </button>
                    <div className="my-4 text-gray-600">{reviews[currentReviewIndex].message}</div>
                    <button onClick={nextReview} className="mr-20 px-3 py-3 h-10 w-10 text-sm font-semibold bg-gray-300 text-white rounded-full hover:bg-gray-400 focus:outline-none">
                    <md.MdOutlineNavigateNext />
                    </button>
                  </div>
                </div>
              </center>
            </div>
        </div>
            </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home1;

