import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import EmergencyRequest from './Pages/EmergencyRequest';
import Search from './Pages/Search'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

const App = () => {
  const hospitalsData = [
    { hospital: "Apollo Hospital", city: "Bengaluru", distance_km: 1.2, last_updated_min: 4, blood_group: "A+", available: true, contact: "+91-80-11112222", directions_url: "https://maps.google.com/?q=Apollo+Hospital+Bengaluru" },
    { hospital: "Fortis Hospital", city: "Bengaluru", distance_km: 3.5, last_updated_min: 10, blood_group: "A+", available: false, contact: "+91-80-22223333", directions_url: "https://maps.google.com/?q=Fortis+Hospital+Bengaluru" },
    { hospital: "Manipal Hospital", city: "Bengaluru", distance_km: 2.1, last_updated_min: 6, blood_group: "O+", available: true, contact: "+91-80-33334444", directions_url: "https://maps.google.com/?q=Manipal+Hospital+Bengaluru" },
    { hospital: "Narayana Health", city: "Bengaluru", distance_km: 4.3, last_updated_min: 12, blood_group: "AB+", available: true, contact: "+91-80-44445555", directions_url: "https://maps.google.com/?q=Narayana+Health+Bengaluru" },
    { hospital: "Sakra World Hospital", city: "Bengaluru", distance_km: 5.0, last_updated_min: 8, blood_group: "A-", available: false, contact: "+91-80-55556666", directions_url: "https://maps.google.com/?q=Sakra+World+Hospital+Bengaluru" },
    { hospital: "Columbia Asia Hospital", city: "Bengaluru", distance_km: 2.8, last_updated_min: 5, blood_group: "O+", available: true, contact: "+91-80-66667777", directions_url: "https://maps.google.com/?q=Columbia+Asia+Hospital+Bengaluru" },
    { hospital: "Cloudnine Hospital", city: "Bengaluru", distance_km: 1.9, last_updated_min: 3, blood_group: "B+", available: true, contact: "+91-80-77778888", directions_url: "https://maps.google.com/?q=Cloudnine+Hospital+Bengaluru" },
    { hospital: "Aster CMI Hospital", city: "Bengaluru", distance_km: 6.2, last_updated_min: 15, blood_group: "AB+", available: false, contact: "+91-80-88889999", directions_url: "https://maps.google.com/?q=Aster+CMI+Hospital+Bengaluru" },

    { hospital: "Lilavati Hospital", city: "Mumbai", distance_km: 2.4, last_updated_min: 7, blood_group: "A+", available: true, contact: "+91-22-11112222", directions_url: "https://maps.google.com/?q=Lilavati+Hospital+Mumbai" },
    { hospital: "Kokilaben Hospital", city: "Mumbai", distance_km: 5.1, last_updated_min: 9, blood_group: "A+", available: true, contact: "+91-22-22223333", directions_url: "https://maps.google.com/?q=Kokilaben+Hospital+Mumbai" },
    { hospital: "Hinduja Hospital", city: "Mumbai", distance_km: 3.3, last_updated_min: 6, blood_group: "O+", available: false, contact: "+91-22-33334444", directions_url: "https://maps.google.com/?q=Hinduja+Hospital+Mumbai" },
    { hospital: "Nanavati Hospital", city: "Mumbai", distance_km: 4.0, last_updated_min: 11, blood_group: "B+", available: true, contact: "+91-22-44445555", directions_url: "https://maps.google.com/?q=Nanavati+Hospital+Mumbai" },
    { hospital: "Wockhardt Hospital", city: "Mumbai", distance_km: 6.5, last_updated_min: 14, blood_group: "AB-", available: false, contact: "+91-22-55556666", directions_url: "https://maps.google.com/?q=Wockhardt+Hospital+Mumbai" },
    { hospital: "Jaslok Hospital", city: "Mumbai", distance_km: 2.9, last_updated_min: 5, blood_group: "O+", available: true, contact: "+91-22-66667777", directions_url: "https://maps.google.com/?q=Jaslok+Hospital+Mumbai" },
    { hospital: "Breach Candy Hospital", city: "Mumbai", distance_km: 3.7, last_updated_min: 8, blood_group: "B+", available: true, contact: "+91-22-77778888", directions_url: "https://maps.google.com/?q=Breach+Candy+Hospital+Mumbai" },
    { hospital: "Saifee Hospital", city: "Mumbai", distance_km: 4.8, last_updated_min: 13, blood_group: "AB-", available: false, contact: "+91-22-88889999", directions_url: "https://maps.google.com/?q=Saifee+Hospital+Mumbai" },

    { hospital: "AIIMS", city: "Delhi", distance_km: 1.5, last_updated_min: 4, blood_group: "A+", available: true, contact: "+91-11-11112222", directions_url: "https://maps.google.com/?q=AIIMS+Delhi" },
    { hospital: "Max Hospital", city: "Delhi", distance_km: 3.2, last_updated_min: 9, blood_group: "A+", available: false, contact: "+91-11-22223333", directions_url: "https://maps.google.com/?q=Max+Hospital+Delhi" },
    { hospital: "Fortis Escorts", city: "Delhi", distance_km: 2.7, last_updated_min: 6, blood_group: "O+", available: true, contact: "+91-11-33334444", directions_url: "https://maps.google.com/?q=Fortis+Escorts+Delhi" },
    { hospital: "BLK Hospital", city: "Delhi", distance_km: 5.4, last_updated_min: 12, blood_group: "A+", available: true, contact: "+91-11-44445555", directions_url: "https://maps.google.com/?q=BLK+Hospital+Delhi" },
    { hospital: "Apollo Hospital", city: "Delhi", distance_km: 6.1, last_updated_min: 10, blood_group: "A-", available: false, contact: "+91-11-55556666", directions_url: "https://maps.google.com/?q=Apollo+Hospital+Delhi" },
    { hospital: "Sir Ganga Ram Hospital", city: "Delhi", distance_km: 3.8, last_updated_min: 7, blood_group: "O+", available: true, contact: "+91-11-66667777", directions_url: "https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+Delhi" },
    { hospital: "Artemis Hospital", city: "Delhi", distance_km: 7.2, last_updated_min: 15, blood_group: "B-", available: false, contact: "+91-11-77778888", directions_url: "https://maps.google.com/?q=Artemis+Hospital+Delhi" },
    { hospital: "Medanta Hospital", city: "Delhi", distance_km: 8.0, last_updated_min: 18, blood_group: "B-", available: true, contact: "+91-11-88889999", directions_url: "https://maps.google.com/?q=Medanta+Hospital+Delhi" },

    { hospital: "Apollo Hospital", city: "Chennai", distance_km: 1.8, last_updated_min: 3, blood_group: "A+", available: true, contact: "+91-44-11112222", directions_url: "https://maps.google.com/?q=Apollo+Hospital+Chennai" },
    { hospital: "MIOT Hospital", city: "Chennai", distance_km: 4.5, last_updated_min: 11, blood_group: "B+", available: true, contact: "+91-44-22223333", directions_url: "https://maps.google.com/?q=MIOT+Hospital+Chennai" },
    { hospital: "Fortis Malar", city: "Chennai", distance_km: 3.1, last_updated_min: 6, blood_group: "O+", available: false, contact: "+91-44-33334444", directions_url: "https://maps.google.com/?q=Fortis+Malar+Chennai" },
    { hospital: "Global Hospital", city: "Chennai", distance_km: 6.0, last_updated_min: 13, blood_group: "A+", available: true, contact: "+91-44-44445555", directions_url: "https://maps.google.com/?q=Global+Hospital+Chennai" },
    { hospital: "SRM Hospital", city: "Chennai", distance_km: 7.4, last_updated_min: 16, blood_group: "B+", available: false, contact: "+91-44-55556666", directions_url: "https://maps.google.com/?q=SRM+Hospital+Chennai" },
    { hospital: "Kauvery Hospital", city: "Chennai", distance_km: 2.6, last_updated_min: 5, blood_group: "O-", available: true, contact: "+91-44-66667777", directions_url: "https://maps.google.com/?q=Kauvery+Hospital+Chennai" },
    { hospital: "Vijaya Hospital", city: "Chennai", distance_km: 3.9, last_updated_min: 8, blood_group: "A-", available: true, contact: "+91-44-77778888", directions_url: "https://maps.google.com/?q=Vijaya+Hospital+Chennai" },
    { hospital: "Gleneagles HealthCity", city: "Chennai", distance_km: 5.8, last_updated_min: 14, blood_group: "A-", available: false, contact: "+91-44-88889999", directions_url: "https://maps.google.com/?q=Gleneagles+HealthCity+Chennai" },

    { hospital: "Yashoda Hospital", city: "Hyderabad", distance_km: 2.0, last_updated_min: 4, blood_group: "A+", available: true, contact: "+91-40-11112222", directions_url: "https://maps.google.com/?q=Yashoda+Hospital+Hyderabad" },
    { hospital: "Care Hospital", city: "Hyderabad", distance_km: 3.6, last_updated_min: 9, blood_group: "B+", available: false, contact: "+91-40-22223333", directions_url: "https://maps.google.com/?q=Care+Hospital+Hyderabad" },
    { hospital: "Apollo Hospital", city: "Hyderabad", distance_km: 4.2, last_updated_min: 7, blood_group: "A+", available: true, contact: "+91-40-33334444", directions_url: "https://maps.google.com/?q=Apollo+Hospital+Hyderabad" },
    { hospital: "KIMS Hospital", city: "Hyderabad", distance_km: 5.7, last_updated_min: 12, blood_group: "B+", available: true, contact: "+91-40-44445555", directions_url: "https://maps.google.com/?q=KIMS+Hospital+Hyderabad" },
    { hospital: "Continental Hospital", city: "Hyderabad", distance_km: 6.3, last_updated_min: 15, blood_group: "A+", available: false, contact: "+91-40-55556666", directions_url: "https://maps.google.com/?q=Continental+Hospital+Hyderabad" },
    { hospital: "Rainbow Hospital", city: "Hyderabad", distance_km: 2.9, last_updated_min: 6, blood_group: "O-", available: true, contact: "+91-40-66667777", directions_url: "https://maps.google.com/?q=Rainbow+Hospital+Hyderabad" },
    { hospital: "AIG Hospital", city: "Hyderabad", distance_km: 7.1, last_updated_min: 18, blood_group: "B+", available: true, contact: "+91-40-77778888", directions_url: "https://maps.google.com/?q=AIG+Hospital+Hyderabad" },
    { hospital: "Sunshine Hospital", city: "Hyderabad", distance_km: 3.4, last_updated_min: 10, blood_group: "B-", available: false, contact: "+91-40-88889999", directions_url: "https://maps.google.com/?q=Sunshine+Hospital+Hyderabad" },

    { hospital: "AMRI Hospital", city: "Kolkata", distance_km: 2.3, last_updated_min: 5, blood_group: "A+", available: true, contact: "+91-33-11112222", directions_url: "https://maps.google.com/?q=AMRI+Hospital+Kolkata" },
    { hospital: "Apollo Gleneagles", city: "Kolkata", distance_km: 4.9, last_updated_min: 11, blood_group: "B+", available: true, contact: "+91-33-22223333", directions_url: "https://maps.google.com/?q=Apollo+Gleneagles+Kolkata" },
    { hospital: "Fortis Hospital", city: "Kolkata", distance_km: 3.5, last_updated_min: 7, blood_group: "O+", available: false, contact: "+91-33-33334444", directions_url: "https://maps.google.com/?q=Fortis+Hospital+Kolkata" },
    { hospital: "Medica Superspecialty", city: "Kolkata", distance_km: 5.2, last_updated_min: 13, blood_group: "B+", available: true, contact: "+91-33-44445555", directions_url: "https://maps.google.com/?q=Medica+Superspecialty+Kolkata" },
    { hospital: "Ruby General Hospital", city: "Kolkata", distance_km: 6.7, last_updated_min: 16, blood_group: "A-", available: false, contact: "+91-33-55556666", directions_url: "https://maps.google.com/?q=Ruby+General+Hospital+Kolkata" },
    { hospital: "Peerless Hospital", city: "Kolkata", distance_km: 3.1, last_updated_min: 6, blood_group: "O-", available: true, contact: "+91-33-66667777", directions_url: "https://maps.google.com/?q=Peerless+Hospital+Kolkata" },
    { hospital: "Belle Vue Clinic", city: "Kolkata", distance_km: 2.7, last_updated_min: 8, blood_group: "B-", available: true, contact: "+91-33-77778888", directions_url: "https://maps.google.com/?q=Belle+Vue+Clinic+Kolkata" },
    { hospital: "Desun Hospital", city: "Kolkata", distance_km: 4.4, last_updated_min: 12, blood_group: "B-", available: false, contact: "+91-33-88889999", directions_url: "https://maps.google.com/?q=Desun+Hospital+Kolkata" }
  ];

  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search data={hospitalsData} />} />
          <Route path="/emergency" element={<EmergencyRequest />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;