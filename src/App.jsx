import Model from './components/Model'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';
import Research from "./CV/Research";
import Volunteer from "./CV/Volunteer";
import AnnuloplastyMore from './CV/AnnuloplastyMore';
import Procedure from './CV/Procedure';

const App = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path='/' element={<Research />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='achievements/research' element={<Research />} />
        <Route path='achievements/research/annuloplasty' element={<AnnuloplastyMore />} />
        <Route path='achievements/research/annuloplasty/procedure' element={<Procedure />} />
        <Route path='achievements/volunteer' element={<Volunteer />} />
      </Routes>
    </main>
  )
}

export default App
