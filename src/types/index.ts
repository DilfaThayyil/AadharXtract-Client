export interface AadhaarData {
  success:boolean,
  data:{
    name: string;
    dob: string;
    gender: string;
    aadhaarNumber: string;
    address: string;
    frontText: string;
    backText: string;
    frontImage?: string;
    backImage?: string;
  },
  message:string
  }
  
  export interface ApiResponse {
    success: boolean;
    data?: AadhaarData;
    message?: string;
    error?: string;
  }