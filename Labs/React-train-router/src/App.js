import Navbar from './Navbar.jsx';
import Station from './Station.jsx';
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome Home!</h2>}/>
        <Route path="/station" element={<Station />}/>
        <Route path="/union-square" element={<Station stationId="635"/>}/>
        <Route path="/times-square" element={<Station stationId="127"/>}/>
        <Route path="/atlantic-avenue" element={<Station stationId="235"/>}/>
        <Route path="/fulton-street" element={<Station stationId="229"/>}/>
      </Routes>
    </div>
  );
}

export default App;
