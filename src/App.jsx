import Compile from './components/Compile'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';
import Research from "./CV/Research";
import Volunteer from "./Hobbies/Volunteer";
import AnnuloplastyMore from './CV/AnnuloplastyMore';
import Procedure from './CV/Procedure';
import Results from './CV/Results';
import Pet from './CV/Pet';
import Hobbies from './Hobbies/Hobbies';
import Origami from './Hobbies/Origami';
import Embroidery from './Hobbies/Embroidery';
import Sports from './Hobbies/Sports';
import BirthdayCard from './bday/BirthdayCard';


const App = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path='/' element={<Compile />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='jordan/achievements/research' element={<Research />} />
        <Route path='achievements/research/annuloplasty' element={<AnnuloplastyMore />} />
        <Route path='achievements/research/annuloplasty/procedure' element={<Procedure />} />
        <Route path='achievements/research/annuloplasty/results' element={<Results />} />
        <Route path='achievements/pet' element={<Pet />} />

        <Route path='hobbies' element={<Hobbies />} />
        <Route path='hobbies/volunteering' element={<Volunteer />} />
        <Route path='hobbies/origami' element={<Origami />} />
        <Route path='hobbies/string' element={<Embroidery />} />
        <Route path='hobbies/sports' element={<Sports />} />

        <Route path="HappyBirthday/:name" element={<BirthdayCard />} />
      </Routes>
    </main>
  )
}

export default App
