import React, { useState, useEffect } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import MakeApiRequest from '../Functions/AxiosApi';




const TelecallerPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('followup');
  const [leadsData, setLeadsData] = useState([]);
  const token = Cookies.get('token');
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;

  useEffect(() => {
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
        const response = await MakeApiRequest('GET', url);
        setLeadsData(response);
        console.log(response,"leads")
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, [activeSection]);

  const handleDetail = (leadId) => {
    navigate(`/details/${leadId}`);
  };

  const headers = {
    'Content-Type': 'application/json',
    
  };

  const handleNavigation = (leadId) => {
    navigate(`/calling/${leadId}`);
  };

  // const handleAcceptLead = (leadId) => {
  //   const url = `http://127.0.0.1:8000/leads/post-leadassign/${id}/`;
  //   const data = { id: leadId, status: 1 };// Assuming status 1 means accepted
  //   MakeApiRequest('POST', url, headers, data)
  //     .then((response) => {
  //       // Handle successful accept lead response
  //       console.log(response, "Lead accepted");
  //       // Optionally, update the leadsData state to remove the accepted lead
  //     })
  //     .catch((error) => {
  //       console.error('Error accepting lead:', error);
  //     });
  // };

  const handleAcceptLead = (leadId) => {
    const url = `http://127.0.0.1:8000/leads/post-leadassign/${id}/`; // Assuming id is the user ID
    const data = { leadId: leadId, Status: 1 }; // Include leadId in the data object
    MakeApiRequest('POST', url, headers, data)
      .then((response) => {
        // Handle successful accept lead response
        console.log(response, "Lead accepted");
        // Optionally, update the leadsData state to remove the accepted lead
      })
      .catch((error) => {
        console.error('Error accepting lead:', error);
      });
  };  
  
  const renderLeads = () => {
    if (!leadsData) {
      return null; // or a loading indicator
    }
  
    return leadsData.map((lead, index) => {
      const isAssignedSection = activeSection === 'assigned';
      const isLeadAccepted = lead.status === 1;
      const buttonText = isLeadAccepted ? 'Accepted' : isAssignedSection ? 'Accept' : <IoCallOutline className="text-gray-800 font-bold" />;
  
      const handleButtonClick = isAssignedSection
        ? () => handleAcceptLead(lead.id)
        : () => handleNavigation(lead.id);
  
      return (
        <div key={index} className="lead-container bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-lg">
          <div className="flex items-center">
            <div onClick={() => handleDetail(lead.id)}  className="profile-pic bg-[#a3306d47] mb-6 text-center text-2xl item-center rounded-xl h-10 w-10">
              <span className="profile-letter text-[#8d337a] font-semibold text-2xl">{lead.lead_name.charAt(0).toUpperCase()}</span>
            </div>
            <div className="lead-details ml-4">
              <h3 className="text-lg font-bold">{lead.lead_name}</h3>
              <p className='text-gray-600'>{lead.
lead_email
}</p>
              <p className='text-gray-700 font-semibold'>{lead.lead_contact}</p>
            </div>
          </div>
          <div className="flex items-center bg-blue-100 rounded-full p-2">
            <button onClick={handleButtonClick} className="text-gray-800 font-bold">
              {buttonText}
            </button>
          </div>
        </div>
      );
    });
  };
  

  // const renderLeads = () => {
  //   if (!leadsData) {
  //     return null; // or a loading indicator
  //   }

  //   return leadsData.map((lead, index) => {
  //     const isAssignedSection = activeSection === 'assigned';
  //     const isLeadAccepted = lead.Status === 1; // checking
  //     const buttonText = isLeadAccepted ? 'Accepted' : isAssignedSection ? 'Accept' : <IoCallOutline className="text-gray-800 font-bold" />;
  //     // const buttonContent = isAssignedSection ? 'Accept' : <IoCallOutline className="text-gray-800 font-bold" />;

  //     const handleButtonClick = isAssignedSection
  //       ? () => handleAcceptLead(lead.id)
  //       : () => handleNavigation(lead.id);

  //     return (
  //       <div key={index} className="lead-container bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-lg">
  //         <div className="flex items-center">
  //           <div onClick={handleDetail} className="profile-pic bg-[#a3306d47] mb-6 text-center text-2xl item-center rounded-xl h-10 w-10">
  //             <span className="profile-letter text-[#8d337a] font-semibold text-2xl">{lead.lead_name.charAt(0).toUpperCase()}</span>
  //           </div>
  //           <div className="lead-details ml-4">
  //             <h3 className="text-lg font-bold">{lead.lead_name}</h3>
  //             <p className='text-gray-600'>5 hours ago</p>
  //             <p className='text-gray-700 font-semibold'>Follow up done 5 hours ago</p>
  //           </div>
  //         </div>
  //         <div className="flex items-center bg-blue-100 rounded-full p-2">
  //           <button onClick={handleButtonClick} className="text-gray-800 font-bold">
  //             {buttonText}
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

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
