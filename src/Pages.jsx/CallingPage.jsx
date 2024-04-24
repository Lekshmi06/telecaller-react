import React, { useState } from 'react';
import {  FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { MdAdd, MdSpeakerPhone, MdDialpad, MdPerson, MdNoteAdd } from 'react-icons/md';
import { FaCircleUser } from "react-icons/fa6";
import { MdCallEnd,  MdEditNote } from "react-icons/md";
import { BsMicMuteFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const CallingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate()
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleNavigation = () => {
    navigate("/popup")
  }

  const handleEndCall = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-[80px]  min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600  h-screen" >
       
      <div className="flex flex-col items-center  ">
        <FaCircleUser  className="text-9xl text-blue-300 mb-2" />
        <h2 className="text-lg font-bold">Subash</h2>
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
