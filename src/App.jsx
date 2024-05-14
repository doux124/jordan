import Model from './components/Model'
import { Route, Routes } from 'react-router-dom';
import Achievements from './redirect/Achievements';

const App = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path='/' element={<Model />} />
        <Route path='achievements' element={<Achievements />} />
      </Routes>
    </main>
  )
}

export default App
