import axios from 'axios';
import { ApiResponse } from '../types/index';
import { BACKENDURL } from '../utility/env';

const BASEURL = `${BACKENDURL}/api`;

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const uploadAadhaarImages = async (
  frontImage: File,
  backImage: File
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    formData.append('front', frontImage);
    formData.append('back', backImage);
    const response = await axiosInstance.post<ApiResponse>('/ocr/process-aadhaar', formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as ApiResponse;
    }
    return {
      success: false,
      message: 'Network error or server is not responding',
    };
  }
};