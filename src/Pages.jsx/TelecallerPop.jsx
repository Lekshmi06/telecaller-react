import React, { useState } from 'react';

const TelecallerPopup = () => {
  const [followUpDate, setFollowUpDate] = useState('');
  const [reasons, setReasons] = useState('');
  const [status, setStatus] = useState('');
  const [saveRecording, setSaveRecording] = useState(false);
  const [notes, setNotes] = useState('');

  const handleSaveRecordingToggle = () => {
    setSaveRecording(!saveRecording);
  };

  const handleSavePopup = () => {
    // Logic to save the popup data
    console.log('Follow-up Date:', followUpDate);
    console.log('Reasons for the Call:', reasons);
    console.log('Current Status:', status);
    console.log('Save Recording:', saveRecording);
    console.log('Notes:', notes);

    // Reset the form fields after saving
    setFollowUpDate('');
    setReasons('');
    setStatus('');
    setSaveRecording(false);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-8 w-96 shadow-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Call End Pop-Up</h2>
        <div className="mb-4">
          <label htmlFor="followUpDate" className="block text-white mb-1">Follow-up Date</label>
          <input type="date" id="followUpDate" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={followUpDate} onChange={e => setFollowUpDate(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="reasons" className="block text-white mb-1">Reasons for the Call</label>
          <input type="text" id="reasons" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={reasons} onChange={e => setReasons(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-white mb-1">Current Status</label>
          <select id="status" className="w-full border border-white border-opacity-50 rounded px-3 py-2 bg-transparent text-white" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Interested">Interested</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Callback Needed">Callback Needed</option>
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
  );
};

export default TelecallerPopup;