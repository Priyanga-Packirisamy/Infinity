import React, {useState} from 'react'
import Navbar from '../General/Navbar'
import OrgFullSidebar from './OrgFullSidebar'
import Footer from '../General/Footer'
import * as md from 'react-icons/md';
import * as gr from 'react-icons/gr';
import FullCard from '../Admin/FullCard';
import { Link } from 'react-router-dom';

export default function OrgLogi() {

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

    const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image objects
  const images = [
    { src: 'cor1.jpg', alt: 'Image 1' },
    { src: 'cor2.jpg', alt: 'Image 2' },
    { src: 'cor3.jpg', alt: 'Image 3' },
    { src: 'cor4.jpg', alt: 'Image 4' },
    { src: 'cor5.jpg', alt: 'Image 5' }
  ];

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <OrgFullSidebar/>
            <div>
                <div>
                    <div className='flex gap-5  bg-gray-200'>
                        <div><div className='text-4xl tracking-wider text-gray-600 font-semibold mx-14 mt-32' style={{maxWidth:350, fontFamily:"Cambria", fontStyle:"italic"}}><center>Let us Orchestrate the Triumph of Your Event</center></div>
                        <div className='text-gray-400 text-xs pt-5 '><center>LOCATION : KUNNIYAMUTHUR, COIMBATORE</center></div>
                        <div className='text-gray-400 text-xs pt-2'><center>ACCOMODATION : 50 PEOPLES</center></div>
                        <div></div>
                        <div className='flex gap-4 mt-6 mx-20'>
                            <button className='ml-5 text-xs rounded-xl p-3 bg-gray-600 text-white font-semibold'>GET IN TOUCH</button>
                            <Link to="/bookform"><button className='text-xs rounded-xl p-3 bg-gray-600 text-white font-semibold'>BOOK YOUR EVENTS</button></Link>
                        </div>
                    </div>
                        <div style={{height:525, width:355}}><img src="logi3.jpg"/></div>
                        <div style={{height:525, width:355}}><img src="logi5.jpg"/></div>
                    </div>
                </div>
                <div className='bg-gray-100 p-5'>
                    <center><div className='pt-3 pb-8 text-2xl text-gray-500 font-semibold' style={{fontFamily:"Cambria", fontStyle:"italic"}}>Snapshot Showcase</div></center>
                    <div className='flex gap-9'>
                        <img src="cor1.jpg" style={{height:135, width:135}}/>
                        <img src="cor2.jpg" style={{height:135, width:135, marginTop:30}}/>
                        <img src="cor3.jpg" style={{height:135, width:135}}/>
                        <img src="cor4.jpg" style={{height:135, width:135, marginTop:30}}/>
                        <img src="cor5.jpg" style={{height:135, width:135}}/>
                        <img src="cor6.jpg" style={{height:135, width:135, marginTop:30}}/>
                        <img src="cor1.jpg" style={{height:135, width:135}}/>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <center>
                        <div className='text-lg font-semibold pt-12 pb-2 text-gray-600'>HUSSAIBA EVENTS</div>
                        <div className='text-3xl font-semibold p-2 text-gray-600' >Your Gateway to Corporate Excellence Where Business Flourishes</div>
                        <div className='mx-40 p-5'><hr/></div>
                        <div  className='text-xs pt-2 pb-8 mx-60 text-gray-500 leading-relaxed' style={{fontFamily:"Times New Roman"}}>Unlock Success in Style! Elevate Your Corporate Gatherings at Our Premier Event Hall. Tailored for Productivity and Prestige, Our Venue Boasts Modern Amenities and Versatile Spaces. From Dynamic Conferences to High-Impact Meetings, We Provide the Perfect Setting for Your Business Ventures. Book Now and Make Your Next Event Unforgettable!</div>
                        <div></div>
                    </center>
                </div>
                <FullCard/>
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
        <Footer/>
    </div>
  )
}

