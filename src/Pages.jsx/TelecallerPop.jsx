import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import MakeApiRequest from '../Functions/AxiosApi';
import { FaArrowLeft,  FaStar } from "react-icons/fa";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
import config from '../Functions/Config';

const TelecallerPopup = () => {
  const [followUpDate, setFollowUpDate] = useState('');
  const [reasons, setReasons] = useState('');
  const [status, setStatus] = useState('');
  const [saveRecording, setSaveRecording] = useState(false);
  const [notes, setNotes] = useState('');
  const { id } = useParams();
  const token = Cookies.get('token');
  const decodedToken = jwtDecode(token);
  const tc_id = decodedToken.id;
  console.log(tc_id,"user_id")

  const handleSaveRecordingToggle = () => {
    setSaveRecording(!saveRecording);
  };

  const navigate = useNavigate()
  

  const headers = {
    'Content-Type': 'application/json',
    
  };

  const handleNavigation = () => {
    navigate("/telecaller")
  }
 
  const handleSavePopup = async () => {
    const data = {
      leadId: id,
      Response: status,
      Reason: reasons,
      Next_update_date: followUpDate,
    };
    try {
      MakeApiRequest('POST', `${config.baseUrl}leads/post-leadassign/${tc_id}/`, headers, data)
        .then((response) => {
          console.log(response, "data");
          if (response) {
             console.log("Data updated successfully");
            // Optionally, you can show a success message to the user
          } else {
            console.log("Failed to update data");
            // Optionally, you can show an error message to the user
          }
          navigate("/telecaller");
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Failed to update data.");
        });
    } catch (error) {
      console.error('Error saving popup data:', error);
    }
};


  // const handleSavePopup = async () => {
  //   // Prepare the data to send to the backend
  //   const data = {
  //     leadId: id, // Use the lead ID from the URL params
  //     Response: status,
  //     Reason: reasons,
  //     Next_update_date: followUpDate,
  //   };
  //   try {
  //     MakeApiRequest('POST', `${config.baseUrl}leads/post-leadassign${tc_id}/`,headers,  data)
  //     .then((response) => {
  //       // Cookies.set('token', response.access, { expires: 7 });
  //       // const token = response.access;
  //       // console.log(token,"token")
  //         console.log(response,"data")
         
  //         navigate("/telecaller")
         
            

  //     })
  //     .catch((error) => {
  //         console.log(error)
  //         setErrorMessage("Invalid username or password.");
  //     })

      
  //   } catch (error) {
  //     console.error('Error saving popup data:', error);
  //   }
  // };

  return (
    <div className=" flex  ">
       
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600   w-screen h-screen item-center shadow-lg">
      <button
        className="rounded-full bg-white text-gray-500 px-4 py-2 ml-3 mt-6 "
        onClick={handleNavigation}
      >
        
        <FaArrowLeft />
       
            
      </button>
      <div className='p-8 pt-[40%]'>
        <h2 className="text-3xl font-semibold text-white mb-10 ml-24">Update Call</h2>
        <div className="mb-4">
          <label htmlFor="followUpDate" className="block text-white mb-1">Follow-up Date</label>
          <input type="date" id="followUpDate" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={followUpDate} onChange={e => setFollowUpDate(e.target.value)} />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="reasons" className="block text-white mb-1">Reasons for the Call</label>
          <input type="text" id="reasons" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={reasons} onChange={e => setReasons(e.target.value)} />
        </div> */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-white mb-1">Current Status</label>
          <select id="status" className="w-48 border border-white border-opacity-50 bg-transparent text-white rounded px-3 py-2" value={status} onChange={e => setStatus(e.target.value)}>
            <option className='text-black hover:bg-gray-400'  value="">Select Status</option>
            <option className='text-black hover:bg-gray-400'  value="Interested">Interested</option>
            <option className='text-black hover:bg-gray-400'  value="Not Interested">Not Interested</option>
            <option className='text-black hover:bg-gray-400'  value="Callback Needed">Callback Needed</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center text-white">
            <input type="checkbox" className="form-checkbox" checked={saveRecording} onChange={handleSaveRecordingToggle} />
            <span className="ml-2">Save Recording</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-white mb-1">Notes</label>
          <textarea id="notes" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
        </div>
        <div className="text-right">
          <button className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:text-white mr-2" onClick={handleSavePopup}>Save</button>
          <button className="bg-white text-gray-600 px-4 py-2 rounded hover:bg-gray-300" onClick={() => console.log('Popup closed')}>Cancel</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TelecallerPopup;