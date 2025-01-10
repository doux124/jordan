import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './standards/Loader';
import Compile from './components/intro/Compile';

const Research = lazy(() => import('./CV/Research'));
const GameMain = lazy(() => import('./game/GameMain'));
const Volunteer = lazy(() => import("./hobbies/Volunteer"));
const AnnuloplastyMore = lazy(() => import('./CV/ARP/AnnuloplastyMore'));
const Procedure = lazy(() => import('./CV/ARP/Procedure'));
const Results = lazy(() => import('./CV/ARP/Results'));

const Pet = lazy(() => import('./CV/Pet'));

const Hobbies = lazy(() => import('./Hobbies/Hobbies'));
const Origami = lazy(() => import('./Hobbies/Origami'));
const Embroidery = lazy(() => import('./Hobbies/Embroidery'));
const Sports = lazy(() => import('./Hobbies/Sports'));

const Tools = lazy(() => import('./hidden/Tools'));
const Hidden = lazy(() => import('./hidden/Hidden'));
const BirthdayCard = lazy(() => import('./hidden/birthday/BirthdayCard'));
const BirthdayButton = lazy(() => import('./hidden/birthday/BirthdayButton'));
const Politicians = lazy(() => import('./hidden/trading/Politicians'));
const VirtualPet = lazy(() => import('./hidden/virtualpet/VirtualPet'));
const PianoPractice = lazy(() => import('./hidden/piano/PianoPractice'));

const App = () => {
  const isNightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  useEffect(() => {
    if (!isNightMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <main>
      <Suspense fallback={<Loader loading={true} />}>
        <Routes basename="/jordan">
          <Route path='/' element={<Compile />} />
          <Route path='game' element={<GameMain />} />
          <Route path='research' element={<Research />} />
          <Route path='research/annuloplasty' element={<AnnuloplastyMore />} />
          <Route path='research/annuloplasty/procedure' element={<Procedure />} />
          <Route path='research/annuloplasty/results' element={<Results />} />
          <Route path='pet' element={<Pet />} />

          <Route path='hobbies' element={<Hobbies />} />
          <Route path='hobbies/volunteering' element={<Volunteer />} />
          <Route path='hobbies/origami' element={<Origami />} />
          <Route path='hobbies/string' element={<Embroidery />} />
          <Route path='hobbies/sports' element={<Sports />} />

          <Route path="tools" element={<Tools />} />
          <Route path="hidden" element={<Hidden />} />
          <Route path="HappyBirthday/:name" element={<BirthdayCard />} />
          <Route path="Surprise/:name" element={<BirthdayButton />} />
          <Route path="trading" element={<Politicians />} />
          <Route path="virtualpet" element={<VirtualPet />} />
          <Route path="piano" element={<PianoPractice />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
