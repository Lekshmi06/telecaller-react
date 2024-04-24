import React, { useState } from 'react';
// import { LiaLessThanSolid } from "react-icons/lia";
import { FaArrowLeft,  FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LeadDetailPage = () => {
  const [selectedTimeline, setSelectedTimeline] = useState('today'); // 'today', 'thisWeek', 'thisMonth'
  
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate()
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleTimelineChange = (timeline) => {
    setSelectedTimeline(timeline);
  };

  const handleNavigation = () => {
    navigate("/telecaller")
  }

  return (
    <div className="bg-blue-100 ">
      <button
        className="rounded-full bg-white text-gray-500 px-4 py-2 ml-3 mt-12 "
        onClick={handleNavigation}
      >
        
        <FaArrowLeft />
       
            
      </button>
      <h1 className="text-3xl font-bold pt-8 px-4">Surej Sathyam</h1>
      <div className='text-[#eeb52f]  flex  gap-1 py-2 px-4 item-center '><div className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div> <div className='text-gray-700  text-lg '>5.0</div></div>
      <p className="text-sm mb-4 px-4 py-2 font-sans">currently working on a project that involves building a job portal using these technologies. </p>
<div className="flex flex-row justify-around pl-15 pr-15">
      <button
        className={`rounded-full px-10 py-2 mr-2 ${activeButton === 'follow' ? 'bg-transparent  shadow-md  text-blue-600 font-semibold' : 'bg-blue-100 shadow-sm  text-gray-600 font-semibold'}`}
        onClick={() => handleButtonClick('follow')}
      >
        FOLLOW
      </button>
      <button
        className={`rounded-full  px-10 py-2 mr-2  ${activeButton === 'contact' ? 'bg-transparent shadow-md text-blue-600 font-semibold' : 'bg-blue-100 shadow-sm shadow-[#cdcbcb] text-gray-600 font-semibold'}`}
        onClick={() => handleButtonClick('contact')}
      >
        CONTACT
      </button>
    </div>

      <div className="timeline py-6 rounded-t-[40px] mt-16  h-screen overflow-hidden bg-gray-100">
      <div className="flex justify-evenly mb-4  ">
      <button
  className={`px-2 py-1 rounded relative ${
    selectedTimeline === 'today' ? 'text-blue-500 font-semibold' : 'text-gray-500'
  }`}
  onClick={() => handleTimelineChange('today')}
>
  TodayTask
  {selectedTimeline === 'today' && (
    <span className="absolute bottom-0 right-2 w-[70px] h-1 bg-blue-500" style={{ marginTop: '2px' }} />
  )}
</button>
<button
  className={`px-2 py-1 rounded relative ${
    selectedTimeline === 'thisWeek' ? 'text-blue-500 font-semibold' : 'text-gray-500'
  }`}
  onClick={() => handleTimelineChange('thisWeek')}
>
  This Week
  {selectedTimeline === 'thisWeek' && (
    <span className="absolute  bottom-0 right-2 w-[70px] h-1 bg-blue-500 font-semibold" style={{ marginTop: '2px' }} />
  )}
</button>
<button
  className={`px-2 py-1 rounded relative ${
    selectedTimeline === 'thisMonth' ? 'text-blue-500' : 'text-gray-500'
  }`}
  onClick={() => handleTimelineChange('thisMonth')}
>
  This Month
  {selectedTimeline === 'thisMonth' && (
    <span className="absolute bottom-0 right-2 w-[78px] h-1 bg-blue-500" style={{ marginTop: '2px' }} />
  )}
</button>
</div>
<div className="bg-gray-300 flex-1 w-screen h-0.5  " > </div>


        {/* <button
          className={`px-2 py-1 rounded ${
            selectedTimeline === 'today' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
          onClick={() => handleTimelineChange('today')}
        >
          Today
        </button>
        <button
          className={`px-2 py-1 rounded ${
            selectedTimeline === 'thisWeek' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
          onClick={() => handleTimelineChange('thisWeek')}
        >
          This Week
        </button>
        <button
          className={`px-2 py-1 rounded ${
            selectedTimeline === 'thisMonth' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
          onClick={() => handleTimelineChange('thisMonth')}
        >
          This Month
        </button> */}
      
     
        {selectedTimeline === 'today' && (
          <div className='p-6'>
          <div className="">
        <div className='flex'>
        <div className="h-3 w-3 rounded-full bg-[#e21b1b80] mr-2 mt-1"></div>
        <div className=''>9:00 AM</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5 bg-[#e21b1b23] rounded-md p-8'>
            <div className='text-lg font-bold text-[#e21b1b]'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
         </div>

      </div>
      </div>
      <div className="">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-[#579f57] mr-2 mt-1"></div>
          <div className=''>10:00 AM</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5   bg-[#579f5735] rounded-md p-8'>
          <div className='text-[#0a530a]  font-bold text-lg'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
          </div>

        </div>
        </div>
      <div className="">
        <div className='flex'>
        <div className="h-3 w-3 rounded-full bg-[#c5b159] mr-2 mt-1"></div>
        <div className=''>11:00 AM</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5    bg-[#c5b1593d] rounded-md p-8'>
        <div className='text-[#c5b159] font-bold text-lg'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
        </div>

      </div>
      </div>
        </div>
        )}
        {selectedTimeline === 'thisWeek' && (
           <div className='p-6'>
           <div className="">
         <div className='flex'>
         <div className="h-3 w-3 rounded-full bg-[#dbe21b80] mr-2 mt-1"></div>
         <div className=''>Monday</div>
         </div>
         <div className='flex'>
         <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
         <div className='ml-4 my-5 bg-[#dbe21b2d] rounded-md p-8'>
             <div className='text-lg text-[#dbe21b]'>Meeting</div>
             <div>egdbnsnvsbnsfnsfnfgbacvb</div>
          </div>
 
       </div>
       </div>
       <div className="">
           <div className='flex'>
           <div className="h-3 w-3 rounded-full bg-[#579f57] mr-2 mt-1"></div>
           <div className=''>Wednesday</div>
           </div>
           <div className='flex'>
           <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
           <div className='ml-4 my-5   bg-[#579f5735] rounded-md p-8'>
           <div className='text-[#0a530a] text-lg'>Meeting</div>
             <div>egdbnsnvsbnsfnsfnfgbacvb</div>
           </div>
 
         </div>
         </div>
       <div className="">
         <div className='flex'>
         <div className="h-3 w-3 rounded-full bg-[#c5b159] mr-2 mt-1"></div>
         <div className=''>Friday</div>
         </div>
         <div className='flex'>
         <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
         <div className='ml-4 my-5    bg-[#c5b1595f] rounded-md p-8'>
         <div className='text-[#c5b159] text-lg'>Meeting</div>
             <div>egdbnsnvsbnsfnsfnfgbacvb</div>
         </div>
 
       </div>
       </div>
         </div>
        )}
        {selectedTimeline === 'thisMonth' && (
          <div className='p-6'>
          <div className="">
        <div className='flex'>
        <div className="h-3 w-3 rounded-full bg-[#e21b1b80] mr-2 mt-1"></div>
        <div className=''>3rd</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5 bg-[#e21b1b44] rounded-md p-8'>
            <div className='text-lg text-[#e21b1b]'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
         </div>

      </div>
      </div>
      <div className="">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-[#579f57] mr-2 mt-1"></div>
          <div className=''>11th</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5   bg-[#579f5735] rounded-md p-8'>
          <div className='text-[#0a530a] text-lg'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
          </div>

        </div>
        </div>
      <div className="">
        <div className='flex'>
        <div className="h-3 w-3 rounded-full bg-[#c5b159] mr-2 mt-1"></div>
        <div className=''>20th</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5    bg-[#c5b1595f] rounded-md p-8'>
        <div className='text-[#c5b159] text-lg'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
        </div>

      </div>
      </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default LeadDetailPage;
