import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Dummy from './Components/Navbar/DummyLand';
import Landing2 from './Components/Landing2';
import SignUpPage from './Components/Signup';
import InterviewPrepPage from './Components/Interv';
import MedicalGuidePage from './Components/MedguideScreen';
import ContactUsPage from './Components/ContactPage';
import OrderConfirmationPage from './Components/Orderconfirm';
import Footer from './Components/Footer';
import SectionPages from './Components/interactiveApp/SectionPages';
import MedApp from './Components/interactiveApp/MedApp';

function App() {
  return (
    <div className="App">

    <div className='routes'>
      <Routes>
        <Route path='/' element={<Dummy/>}/>
        <Route path='/home' element={<Landing2/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/InterviewBookingPage' element={<InterviewPrepPage/>}/>
        <Route path='/buyguide' element={<MedicalGuidePage/>}/>
        
        <Route path='/order-confirmation' element={<OrderConfirmationPage/>}/>
        
        <Route path='/app' element={<MedApp/>}/>

      </Routes>
    </div>
    <div className=' bottom-0 w-full' >

{/* <Footer/> */}
</div>
    </div>
  );
}

export default App;
