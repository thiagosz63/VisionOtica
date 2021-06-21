import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes/Routes';


function App() {
  return (
    <div>
      <Routes />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
