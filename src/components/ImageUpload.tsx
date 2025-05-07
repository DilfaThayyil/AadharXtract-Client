import React, { useState, useRef } from 'react';

interface ImageUploadProps {
  onImagesSelected: (frontImage: File, backImage: File) => void;
  loading: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesSelected, loading }) => {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);

  const handleFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setError('Please upload only image files');
        return;
      }
      
      setFrontImage(file);
      setFrontPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setError('Please upload only image files');
        return;
      }
      
      setBackImage(file);
      setBackPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!frontImage || !backImage) {
      setError('Please upload both front and back images of the Aadhaar card');
      return;
    }
    
    onImagesSelected(frontImage, backImage);
  };

  const resetForm = () => {
    setFrontImage(null);
    setBackImage(null);
    setFrontPreview(null);
    setBackPreview(null);
    setError(null);
    
    if (frontInputRef.current) frontInputRef.current.value = '';
    if (backInputRef.current) backInputRef.current.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Upload Aadhaar Card Images</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Front Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <div className="text-center mb-2">Front Side</div>
            {frontPreview ? (
              <div className="relative">
                <img
                  src={frontPreview}
                  alt="Front Preview"
                  className="w-full h-48 object-contain rounded mb-2"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFrontImage(null);
                    setFrontPreview(null);
                    if (frontInputRef.current) frontInputRef.current.value = '';
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div 
                className="flex flex-col items-center justify-center h-48 bg-gray-50 border border-gray-200 rounded cursor-pointer"
                onClick={() => frontInputRef.current?.click()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-sm text-gray-500">Click to upload front side</p>
              </div>
            )}
            <input
              type="file"
              ref={frontInputRef}
              onChange={handleFrontImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          
          {/* Back Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <div className="text-center mb-2">Back Side</div>
            {backPreview ? (
              <div className="relative">
                <img
                  src={backPreview}
                  alt="Back Preview"
                  className="w-full h-48 object-contain rounded mb-2"
                />
                <button
                  type="button"
                  onClick={() => {
                    setBackImage(null);
                    setBackPreview(null);
                    if (backInputRef.current) backInputRef.current.value = '';
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div 
                className="flex flex-col items-center justify-center h-48 bg-gray-50 border border-gray-200 rounded cursor-pointer"
                onClick={() => backInputRef.current?.click()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-sm text-gray-500">Click to upload back side</p>
              </div>
            )}
            <input
              type="file"
              ref={backInputRef}
              onChange={handleBackImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
            disabled={loading}
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            disabled={!frontImage || !backImage || loading}
          >
            {loading ? 'Processing...' : 'Extract Information'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;