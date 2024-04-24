import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";


const leads = [
  { name: 'Subash', lastCalled: '2 hours ago', followUp: '1 hour ago' },
  { name: 'Suresh', lastCalled: 'Yesterday', followUp: '2 hours ago' },
  { name: 'Suvarna', lastCalled: '2 days ago', followUp: '1 day ago' },
  { name: 'John', lastCalled: '3 hours ago', followUp: '2 hours ago' },
  { name: 'Alice', lastCalled: '4 hours ago', followUp: '3 hours ago' },
  { name: 'Bob', lastCalled: '5 hours ago', followUp: '4 hours ago' },
  { name: 'Emily', lastCalled: '6 hours ago', followUp: '5 hours ago' },
  { name: 'Michael', lastCalled: '1 day ago', followUp: '6 hours ago' },
  { name: 'Emma', lastCalled: '2 days ago', followUp: '1 day ago' },
  { name: 'Daniel', lastCalled: '3 days ago', followUp: '2 days ago' },
  // Add more leads as needed
];



// const getRandomColor = () => {
//   // Generate a random hex color code
//   return '#' + Math.floor(Math.random()*16777215).toString(16);
// };

const TelecallerPage = () => {

  const navigate = useNavigate()
  const handleDetail = () => {
        navigate("/details")
  }

  const handleNavigation = () => {
    navigate("/calling")
  }

  return (
    <div className="bg-blue-100 min-h-screen">
       <button
        className="rounded-full bg-white  text-gray-500 px-4 py-2 ml-80  mt-12 "
       
      >
        
        <RiSearchLine />
       
            
      </button>
      <div className="p-4">
        <div className="">
          <h1 className="text-3xl pt-10 font-bold">LEADS</h1>
          <div className="flex justify-between items-center mt-2 mb-4">
            <h2 className="text-lg text-gray-700 font-semibold">Today's Leads</h2>
            <div className="flex">
              <button className="text-blue-500 px-3 py-1 rounded mr-2">FILTER</button>
              {/* Add filter options here */}
            </div>
          </div>
          {leads.map((lead, index) => (
            <div  key={index} className="lead-container bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-lg">
              <div className="flex items-center">
                {/* Profile picture with different colors */}
                {/* <div onClick={handleDetail} className="profile-pic mb-6 text-center text-2xl item-center  backdrop-blur-lg opacity-65 rounded-xl h-10 w-10" style={{ backgroundColor:getRandomColor()}}> */}
                <div onClick={handleDetail} className="profile-pic bg-[#a3306d47] mb-6 text-center text-2xl item-center   rounded-xl h-10 w-10" >
                  <span className="profile-letter text-[#8d337a] font-semibold text-2xl">{lead.name.charAt(0).toUpperCase()}</span>
                </div>
               


                <div className="lead-details ml-4">
                  <h3 className="text-lg  font-bold">{lead.name}</h3>
                  <p className='text-gray-600'> {lead.lastCalled}</p>
                  <p className='text-gray-700 font-semibold'>Follow up done {lead.followUp}</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-100 rounded-full p-2">
                <IoCallOutline onClick={handleNavigation} className="text-gray-800 font-bold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelecallerPage;