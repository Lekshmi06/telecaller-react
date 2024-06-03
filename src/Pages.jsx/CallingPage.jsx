import React, { useState, useEffect } from 'react';
import {  FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { MdAdd, MdSpeakerPhone, MdDialpad, MdPerson, MdNoteAdd } from 'react-icons/md';
import { FaCircleUser } from "react-icons/fa6";
import { MdCallEnd,  MdEditNote } from "react-icons/md";
import { BsMicMuteFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import MakeApiRequest from '../Functions/AxiosApi';


import config from '../Functions/Config';
const CallingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate()
  const [leadName, setLeadname] = useState("")
  const { id } = useParams();
  console.log(id,"idgkhj, ")
  
  const headers = {
    'Content-Type': 'application/json',
    
  };

  useEffect (() => {
    MakeApiRequest('GET', `${config.baseUrl}leads/lead/${id}/`, headers)
    .then((response) => {
      console.log(response, "data");
      console.log(response.lead_name,"name has set")
      setLeadname(response.lead_name)
      
      
    })
    .catch((error) => {
      console.log(error);
    
    });
} ,[]);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleNavigation = () => {
    navigate(`/popup/${id}`)
    console.log(id, "navigate")
  }

  const handleEndCall = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-[80px]  min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600  h-screen" >
       
      <div className="flex flex-col items-center  ">
        <FaCircleUser  className="text-9xl text-blue-300 mb-2" />
        <h2 className="text-lg font-bold">{leadName}</h2>
        <p className="text-sm">00:00</p>
      </div>
     
      <div className="grid grid-cols-3 gap-12 bg-white bg-transparent bg-opacity-15 justify-center text-4xl rounded-3xl p-10  ">
        <button className=" text-black  py-2 rounded" onClick={handleToggleRecording}>
          {isRecording ? <FaRegStopCircle /> : <FaRegPlayCircle />}
        </button>
        <button className=" text-black  py-2 rounded">
          <MdAdd />
        </button>
        <button className="text-red-500">
          <MdNoteAdd className=' text-black' />
        </button> 
        <button className=" text-black  py-2 rounded">
          <BsMicMuteFill />
        </button>
        <button className="text-red-500">
          < MdEditNote className=' text-black' />
        </button> 
        <button className=" text-black  py-2 rounded">
          <FaRegPauseCircle />
        </button>
      </div>
      <div className="flex  gap-10  text-4xl pb-11 mt-4">
      <button className=" text-black px-4 py-2 rounded" onClick={handleToggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <button onClick={handleNavigation} className="text-gray-900 bg-red-500 rounded-full p-4">
        <MdCallEnd />
        </button>
        <button className="text-black">
          <MdDialpad />
        </button>
        {/* <button className="text-red-500">
          <MdNoteAdd />
        </button> */}
      </div>
     
    </div>
  );
};

export default CallingPage;
