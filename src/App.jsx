import Compile from './components/intro/Compile'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';
import Research from "./CV/Research";
import Volunteer from "./hobbies/Volunteer";
import AnnuloplastyMore from './CV/ARP/AnnuloplastyMore';
import Procedure from './CV/ARP/Procedure';
import Results from './CV/ARP/Results';
import Pet from './CV/Pet';
import Hobbies from './Hobbies/Hobbies';
import Origami from './Hobbies/Origami';
import Embroidery from './Hobbies/Embroidery';
import Sports from './Hobbies/Sports';
import BirthdayCard from './hidden/BirthdayCard';
import Hidden from './hidden/Hidden';


const App = () => {
  return (
    <main className="bg-black">
      <Routes basename="/jordan">
        <Route path='/' element={<Compile />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='achievements/research' element={<Research />} />
        <Route path='achievements/research/annuloplasty' element={<AnnuloplastyMore />} />
        <Route path='achievements/research/annuloplasty/procedure' element={<Procedure />} />
        <Route path='achievements/research/annuloplasty/results' element={<Results />} />
        <Route path='achievements/pet' element={<Pet />} />

        <Route path='hobbies' element={<Hobbies />} />
        <Route path='hobbies/volunteering' element={<Volunteer />} />
        <Route path='hobbies/origami' element={<Origami />} />
        <Route path='hobbies/string' element={<Embroidery />} />
        <Route path='hobbies/sports' element={<Sports />} />

        <Route path="hidden" element={<Hidden />} />
        <Route path="HappyBirthday/:name" element={<BirthdayCard />} />
      </Routes>
    </main>
  )
}

export default App
