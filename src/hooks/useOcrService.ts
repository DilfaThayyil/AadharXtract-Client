import { useState } from 'react';
import { uploadAadhaarImages } from '../services/apiServices';
import { ApiResponse } from '../types/index';

interface OcrServiceState {
  loading: boolean;
  error: string | null;
  data: ApiResponse | null;
}

export const useOcrService = () => {
  const [state, setState] = useState<OcrServiceState>({
    loading: false,
    error: null,
    data: null,
  });

  const processAadhaarCard = async (frontImage: File, backImage: File) => {
    setState({ ...state, loading: true, error: null });
    
    try {
      const response = await uploadAadhaarImages(frontImage, backImage);
      if (response.success && response) {
        setState({
          loading: false,
          error: null,
          data: response || null,
        });
        return true;
      } else {
        setState({
          loading: false,
          error: response.message || 'Failed to process images',
          data: null,
        });
        return false;
      }
    } catch (error) {
      setState({
        loading: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        data: null,
      });
      return false;
    }
  };

  return {
    ...state,
    processAadhaarCard,
  };
};