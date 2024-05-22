import Model from './components/Model'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';
import Research from "./CV/Research";
import Volunteer from "./CV/Volunteer";
import AnnuloplastyMore from './CV/AnnuloplastyMore';
import Procedure from './CV/Procedure';
import Results from './CV/Results';
import Pet from './CV/Pet';

const App = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path='/' element={<Model />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='achievements/research' element={<Research />} />
        <Route path='achievements/research/annuloplasty' element={<AnnuloplastyMore />} />
        <Route path='achievements/research/annuloplasty/procedure' element={<Procedure />} />
        <Route path='achievements/research/annuloplasty/results' element={<Results />} />
        <Route path='achievements/pet' element={<Pet />} />
        <Route path='achievements/volunteer' element={<Volunteer />} />
      </Routes>
    </main>
  )
}

export default App
