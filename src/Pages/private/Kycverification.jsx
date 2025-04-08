import React, { useState } from 'react';

const KycVerification = () => {
  const [photo, setPhoto] = useState(null);
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);

  const handleFileChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log('Submitting files:', { photo, idFront, idBack });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">KYC Verification</h2>
        <div className="flex justify-center mb-4">
          <div className="bg-green-600 p-3 md:p-4 rounded-full">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <p className="text-sm md:text-base text-center mb-6 leading-relaxed">
          In order to complete your registration, please upload a copy of your identity with a
          clear selfie photo to prove the document holder.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm mb-1">
              Upload Your Photo (Portrait - face or head and shoulders):
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange(setPhoto)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Front of Valid ID Card:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange(setIdFront)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Back of Valid ID Card:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange(setIdBack)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Request Verification
        </button>
      </div>
    </div>
  );
};

export default KycVerification;
