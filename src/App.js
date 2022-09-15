import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/AdminUI';
import AdherentUI from './pages/AdherentUI';
import LogIn from './pages/Login';
import AdherentList from './pages/GetAdherents';
import AdhModif from './pages/ModifAdherent';
import PlcModif from './pages/ModifPlace';
import PlaceList from './pages/GetPlace';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<AdherentUI/>}/>
        <Route path="/login" element={<LogIn/>}/> 
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adherent" element={<AdherentList/>}/>
        <Route path="/adherent/add" element={<AdhModif/>}/>
        <Route path="/place" element={<PlaceList/>}/>
        <Route path="/place/add" element={<PlcModif/>}/>
      </Routes>
  );
}

export default App;
