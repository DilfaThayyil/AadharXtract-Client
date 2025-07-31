import { toast } from "react-toastify";
import { AadhaarData } from "../types";

export const getFormattedText = (data: AadhaarData['data']) => {
    return `
  Name: ${data.name || 'Not detected'}
  Aadhaar Number: ${data.aadhaarNumber || 'Not detected'}
  DOB: ${data.dob || 'Not detected'}
  Gender: ${data.gender || 'Not detected'}
  Address: ${data.address || 'Not detected'}
  
  --- Raw OCR Text ---
  Front Side Text:
  ${data.frontText || 'No text'}
  
  Back Side Text:
  ${data.backText || 'No text'}
  `.trim();
};

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!');
    } catch (err) {
        toast.error('Failed to copy text.');
    }
};

export const downloadAsFile = (text: string, filename: string, type: string = 'text/plain') => {
    const blob = new Blob([text], { type });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
