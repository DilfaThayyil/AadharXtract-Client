import React from 'react';
import { AadhaarData } from '../types/index';
import { copyToClipboard, downloadAsFile, getFormattedText } from '../utility/saveDetails';
import { FiCopy, FiDownload, FiFileText } from 'react-icons/fi';


interface AadhaarDetailsProps {
  data: AadhaarData;
  onReset: () => void;
}

const AadhaarDetails: React.FC<AadhaarDetailsProps> = ({ data, onReset }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 relative">
      
      <div className="absolute top-4 right-4 flex items-center gap-x-3">
        <button
          onClick={() => copyToClipboard(getFormattedText(data.data))}
          className="text-gray-500 hover:text-gray-700"
          title="Copy All Details"
        >
          <FiCopy size={18} />
        </button>
        <button
          onClick={() => downloadAsFile(getFormattedText(data.data), 'aadhaar-details.txt')}
          className="text-gray-500 hover:text-gray-700"
          title="Save as TXT"
        >
          <FiFileText size={18} />
        </button>
        <button
          onClick={() => downloadAsFile(JSON.stringify(data.data, null, 2), 'aadhaar-details.json', 'application/json')}
          className="text-gray-500 hover:text-gray-700"
          title="Save as JSON"
        >
          <FiDownload size={18} />
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Extracted Aadhaar Information</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Images
        <div>
          <h3 className="font-semibold mb-2">Front Side</h3>
          {data.data.frontImage && (
            <img 
              src={`http://localhost:5000${data.data.frontImage}`} 
              alt="Aadhaar Front" 
              className="w-full h-48 object-contain border rounded"
            />
          )}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Back Side</h3>
          {data.data.backImage && (
            <img 
              src={`http://localhost:5000${data.data.backImage}`} 
              alt="Aadhaar Back" 
              className="w-full h-48 object-contain border rounded"
            />
          )}
        </div> */}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-4 text-lg">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 mb-1">Name</p>
            <p className="font-medium">{data.data.name || 'Not detected'}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Aadhaar Number</p>
            <p className="font-medium">{data.data.aadhaarNumber || 'Not detected'}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Date of Birth</p>
            <p className="font-medium">{data.data.dob || 'Not detected'}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Gender</p>
            <p className="font-medium">{data.data.gender || 'Not detected'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2 text-lg">Address</h3>
        <p>{data.data.address || 'Address not detected'}</p>
      </div>
      
      <details className="mb-6">
        <summary className="cursor-pointer font-semibold text-blue-600 mb-2">
          Show Raw Extracted Text
        </summary>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Front Side Text:</h4>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40 mb-4">
            {data.data.frontText || 'No text extracted'}
          </pre>
          
          <h4 className="font-medium mb-2">Back Side Text:</h4>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
            {data.data.backText || 'No text extracted'}
          </pre>
        </div>
      </details>

      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Process Another Card
        </button>
      </div>
    </div>
  );
};

export default AadhaarDetails;