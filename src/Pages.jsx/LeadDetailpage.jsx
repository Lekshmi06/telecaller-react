import React, { useState } from 'react';

const LeadDetailPage = () => {
  const [selectedTimeline, setSelectedTimeline] = useState('today'); // 'today', 'thisWeek', 'thisMonth'

  const handleTimelineChange = (timeline) => {
    setSelectedTimeline(timeline);
  };

  return (
    <div className="bg-blue-100">
      <button
        className="rounded-full bg-white text-gray-500 px-4 py-2 ml-3 mt-4"
        onClick={() => handleBackClick()}
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4 p-4">Surej Sathyam</h1>
      <p className="text-sm mb-4 p-4">Lead Description i want to change this page, i want to include a back button to go back just above the lead name in the left side, rounded edge with white bg and gray back text. 
i want the time line to be in the below style. </p>
      <div className="timeline py-6 rounded-t-[40px] mt-16  h-screen overflow-hidden bg-gray-100">
      <div className="flex justify-evenly mb-4  ">
      <button
  className={`px-2 py-1 rounded relative ${
    selectedTimeline === 'today' ? 'text-blue-500' : 'text-gray-500'
  }`}
  onClick={() => handleTimelineChange('today')}
>
  Today
  {selectedTimeline === 'today' && (
    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" style={{ marginTop: '2px' }} />
  )}
</button>
<button
  className={`px-2 py-1 rounded relative ${
    selectedTimeline === 'thisWeek' ? 'text-blue-500' : 'text-gray-500'
  }`}
  onClick={() => handleTimelineChange('thisWeek')}
>
  This Week
  {selectedTimeline === 'thisWeek' && (
    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" style={{ marginTop: '2px' }} />
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
    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" style={{ marginTop: '2px' }} />
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
        <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
        <div className=''>Time</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5bg-[#e21b1b80] rounded-md p-8'>
            <div className='text-[#e21b1b80]'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
         </div>

      </div>
      </div>
      <div className="">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
          <div className=''>Time</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5  border-[3px] border-[#579f575f]  bg-[#579f575f] rounded-md p-8'>
          <div className='text-[#e21b1b80]'>Meeting</div>
            <div>egdbnsnvsbnsfnsfnfgbacvb</div>
          </div>

        </div>
        </div>
      <div className="">
        <div className='flex'>
        <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
        <div className=''>Time</div>
        </div>
        <div className='flex'>
        <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
        <div className='ml-4 my-5  border-[3px] border-[#c5b1595f]  bg-[#c5b1595f] rounded-md p-8'></div>

      </div>
      </div>
        </div>
        )}
        {selectedTimeline === 'thisWeek' && (
          <div className='p-6'>
            <div className="">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
          <div className=''>Time</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5  border-[3px] border-[#e21b1b80]  bg-[#e21b1b80] rounded-md p-8'>ggkhgkhghjgkjhjfjhj</div>

        </div>
        </div>
        <div className="">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
          <div className=''>Time</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5  border-[3px] border-[#c5b1595f]  bg-[#c5b1595f] rounded-md p-8'>ggkhgkhghjgkjhjfjhj</div>

        </div>
        </div>
          </div>
        )}
        {selectedTimeline === 'thisMonth' && (
          <div className="p-6">
          <div className='flex'>
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 mt-1"></div>
          <div className=''>Time</div>
          </div>
          <div className='flex'>
          <div className="bg-gray-400 flex-2 w-0.5 h-32" > </div>
          <div className='ml-4 my-5  border-[3px] border-[#579f575f]  bg-[#579f575f] rounded-md p-8'>ggkhgkhghjgkjhjfjhj</div>

        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default LeadDetailPage;
