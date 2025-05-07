import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;