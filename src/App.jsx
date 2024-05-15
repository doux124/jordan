import Model from './components/Model'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';
import Research from "./redirect/Research";

const App = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path='/' element={<Model />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='achievements/research' element={<Research />} />
      </Routes>
    </main>
  )
}

export default App
