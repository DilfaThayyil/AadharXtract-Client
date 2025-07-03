# 🧑‍💻 Aadhaar OCR System – Frontend

This is the frontend for the **Aadhaar OCR System**, built with **React.js**. It allows users to upload both sides of their Aadhaar card, sends them to the backend for OCR processing, and neatly displays the extracted information like name, date of birth, and Aadhaar number.

---

## 🔥 Features

✅ Upload front and back images of an Aadhaar card  
✅ Preview uploaded images instantly  
✅ Trigger OCR extraction via backend API  
✅ Display Aadhaar details in a clean and responsive layout  

---

## 🛠️ Tech Stack

- ⚛️ React (with Hooks)
- 📡 Axios – for handling API requests
- 🎨 Tailwind CSS *(or any CSS framework you prefer)*

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DilfaThayyil/aadharXtract-Client.git
cd aadharXtract-Client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the backend URL:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 4. Start the Development Server

```bash
npm start
```

---

## 📄 .env Example

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## 🧪 How to Use

1. Upload clear images of the **front and back** of the Aadhaar card
2. Click the **"Extract Info"** button
3. View the extracted Aadhaar details rendered below the upload section

---

## ⚠️ Requirements & Notes

* Ensure the backend server is running and accessible
* Only supports `.jpg`, `.jpeg`, or `.png` images
* Recommended file size: **under 5MB**
* 💡 Tip: Use **clear, high-resolution images** for better OCR accuracy

---

## 📬 Feedback & Contributions

Found a bug? Want to suggest a new feature?
Feel free to open an issue or submit a PR. contributions are always welcome! 💬

---

## 📄 License

MIT License © 2025 [Dilfa Thayyil](https://github.com/DilfaThayyil)
