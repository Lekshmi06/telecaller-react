import React, { useState, useEffect } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
 import { jwtDecode } from "jwt-decode";
 import Cookies from 'js-cookie';
import MakeApiRequest from '../Functions/AxiosApi';

import config from '../Functions/Config';


const TelecallerPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('today ');
  const [leadsData, setLeadsData] = useState([]);
  const token = Cookies.get('token');
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;
  console.log(id,"id")
  // const access_token = Cookies.get('access_token')
  useEffect(() => {
    // const userId = jwt_decode(access_token).id;

    const fetchLeads = async () => {
      let url = '';
      if (activeSection === 'today') {
        url = `http://127.0.0.1:8000/leads/todaylead/${id}/`;
      } else if (activeSection === 'followup') {
        url = `http://127.0.0.1:8000/leads/followlead/${id}/`;
      } else if (activeSection === 'assigned') {
        url = `http://127.0.0.1:8000/leads/leadslist/${id}/`;
      }

      try {
        console.log("inside request")
        const response = await MakeApiRequest('GET', url);
        setLeadsData(response);
        console.log(response, "lead")
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, [activeSection]);

  const handleDetail = () => {
    navigate("/details");
  };

  const handleNavigation = () => {
    navigate("/calling");
  };

  const renderLeads = () => {
    if (!leadsData) {
      return null; // or a loading indicator
      console.log("loding.............................")
    }
    return leadsData.map((lead, index) => (
      <div key={index} className="lead-container bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-lg">
        <div className="flex items-center">
          <div onClick={handleDetail} className="profile-pic bg-[#a3306d47] mb-6 text-center text-2xl item-center rounded-xl h-10 w-10">
            <span className="profile-letter text-[#8d337a] font-semibold text-2xl">{lead.lead_name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="lead-details ml-4">
            <h3 className="text-lg font-bold">{lead.lead_name}</h3>
            <p className='text-gray-600'>5 hours ago</p>
            <p className='text-gray-700 font-semibold'>Follow up done 5 hours ago</p>
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
        className="rounded-full bg-white text-gray-500 px-4 py-2 ml-80 mt-12"
      >
        <RiSearchLine />
      </button>
      <div className="p-4">
        <div className="">
          <h1 className="text-3xl pt-10 font-bold">LEADS</h1>
          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="flex gap-16">
              <button
                className={`text-lg text-gray-700 ${activeSection === 'today' && 'font-bold'}`}
                onClick={() => setActiveSection('today')}
              >
                Today's
              </button>
              <button
                className={`text-lg text-gray-700 ${activeSection === 'followup' && 'font-bold'}`}
                onClick={() => setActiveSection('followup')}
              >
                Follow-up
              </button>
              <button
                className={`text-lg text-gray-700 ${activeSection === 'assigned' && 'font-bold'}`}
                onClick={() => setActiveSection('assigned')}
              >
                Assigned
              </button>
            </div>
          </div>
          {renderLeads()}
        </div>
      </div>
    </div>
  );
};

export default TelecallerPage;
