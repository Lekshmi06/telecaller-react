import React, { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";

const leads = [
  { name: 'Subash', lastCalled: '2 hours ago', followUp: '1 hour ago', type:  ['today','assigned']  },
  { name: 'Suresh', lastCalled: 'Yesterday', followUp: '2 hours ago', type:  ['today','assigned']  },
  { name: 'Suvarna', lastCalled: '2 days ago', followUp: '1 day ago', type: ['today','assigned'] },
  { name: 'John', lastCalled: '3 hours ago', followUp: '2 hours ago', type: ['followup','assigned'] },
  { name: 'Alice', lastCalled: '4 hours ago', followUp: '3 hours ago', type: ['followup','assigned' ]},
  { name: 'Bob', lastCalled: '5 hours ago', followUp: '4 hours ago', type: 'assigned' },
  { name: 'Emily', lastCalled: '6 hours ago', followUp: '5 hours ago', type: 'assigned' },
  // Add more leads as needed
];

const Landing = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('today');

  const handleDetail = () => {
    navigate("/details");
  };

  const handleNavigation = () => {
    navigate("/calling");
  };

  const renderLeads = (section) => {
    return leads
      // .filter((lead) => lead.type === section)
      .filter((lead) => lead.type.includes(section))
      .map((lead, index) => (
        <div key={index} className="lead-container bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-lg">
          <div className="flex items-center">
            <div onClick={handleDetail} className="profile-pic bg-[#a3306d47] mb-6 text-center text-2xl item-center   rounded-xl h-10 w-10">
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
      ));
  };

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
          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="flex gap-16">
              <button
                className={`text-lg text-gray-700  ${activeSection === 'today' && 'font-semibold'}`}
                onClick={() => setActiveSection('today')}
              >
                Today's
              </button>
              <button
                className={`text-lg text-gray-700 ${activeSection === 'followup' && 'font-semibold'}`}
                onClick={() => setActiveSection('followup')}
              >
                Follow-up 
              </button>
              <button
                className={`text-lg text-gray-700  ${activeSection === 'assigned' && 'font-semibold'}`}
                onClick={() => setActiveSection('assigned')}
              >
                Assigned 
              </button>
            </div>
          </div>
          {renderLeads(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default Landing;
