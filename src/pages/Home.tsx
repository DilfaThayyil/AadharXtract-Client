import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import AadhaarDetails from '../components/AadhaarDetails'
import LoadingSpinner from '../components/LoadingSpinner';
import { useOcrService } from '../hooks/useOcrService';
import { toast } from 'react-toastify';

const Home: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const { loading, error, data, processAadhaarCard } = useOcrService();
  console.log("data----Home------",data)
  const handleImagesSelected = async (frontImage: File, backImage: File) => {
    const success = await processAadhaarCard(frontImage, backImage);
    console.log("handleImage----Home-------",success)
    if (success) {
      setShowResults(true);
      toast.success('Successfully extracted Aadhaar information!');
    } else {
      toast.error(error || 'Failed to process images. Please try again.');
    }
  };

  const handleReset = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Aadhaar Card OCR System
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Upload the front and back images of your Aadhaar card to extract information
          </p>
        </div>

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <LoadingSpinner />
              <p className="text-center mt-4">Processing your Aadhaar card...</p>
            </div>
          </div>
        )}

        {!showResults ? (
          <ImageUpload onImagesSelected={handleImagesSelected} loading={loading} />
        ) : data ? (
          <AadhaarDetails data={data} onReset={handleReset} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;