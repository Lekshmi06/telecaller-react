import React, { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaPhone, FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { MdAdd, MdSpeakerPhone, MdDialpad, MdPerson, MdNoteAdd } from 'react-icons/md';
import { FaCircleUser } from "react-icons/fa6";
import { MdCallEnd,  MdEditNote } from "react-icons/md";
import { BsMicMuteFill } from "react-icons/bs";
const CallingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleEndCall = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-[#2442bad8]  h-screen" >
        <div className=''>
      <div className="flex flex-col items-center mb-44">
        <FaCircleUser  className="text-9xl text-blue-300 mb-2" />
        <h2 className="text-lg font-bold">Subash</h2>
        <p className="text-sm">00:00</p>
      </div>
      {/* <div className="flex-grow flex flex-col items-center justify-center">
        <div className="border border-gray-300 p-4 rounded-lg mb-8">
          <img src="user-image.jpg" alt="User" className="rounded-full h-40 w-40 mb-4" />
        </div>
      </div> */}
   
        {/* <button className=" text-black px-4 py-2 rounded" onClick={handleToggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button> */}
        {/* <button className=" text-black px-4 py-2 rounded" onClick={handleEndCall}>
          <FaPhone />
        </button> */}
    
      {/* <div className=" mt-10 pb-48  "> */}
      <div className="grid grid-cols-3 gap-10 bg-black bg-transparent bg-opacity-15 text-4xl rounded-3xl p-10 mb-44 ">
        <button className=" text-black px-4 py-2 rounded" onClick={handleToggleRecording}>
          {isRecording ? <FaRegStopCircle /> : <FaRegPlayCircle />}
        </button>
        <button className=" text-black px-4 py-2 rounded">
          <MdAdd />
        </button>
        <button className="text-red-500">
          <MdNoteAdd className=' text-black' />
        </button> 
        <button className=" text-black px-4 py-2 rounded">
          <BsMicMuteFill />
        </button>
        <button className="text-red-500">
          < MdEditNote className=' text-black' />
        </button> 
        <button className=" text-black px-4 py-2 rounded">
          <FaRegPauseCircle />
        </button>
      </div>
      <div className="flex justify-around gap-3 text-4xl mt-4">
      <button className=" text-black px-4 py-2 rounded" onClick={handleToggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <button className="text-gray-900 bg-red-500 rounded-full p-4">
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
    </div>
  );
};

export default CallingPage;
