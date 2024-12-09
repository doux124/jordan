import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Compile from './components/intro/Compile';

const Research = lazy(() => import('./CV/Research'));
const Achievements = lazy(() => import('./redirect/Achievements'));
const Volunteer = lazy(() => import("./hobbies/Volunteer"));
const AnnuloplastyMore = lazy(() => import('./CV/ARP/AnnuloplastyMore'));
const Procedure = lazy(() => import('./CV/ARP/Procedure'));
const Results = lazy(() => import('./CV/ARP/Results'));

const Pet = lazy(() => import('./CV/Pet'));

const Hobbies = lazy(() => import('./Hobbies/Hobbies'));
const Origami = lazy(() => import('./Hobbies/Origami'));
const Embroidery = lazy(() => import('./Hobbies/Embroidery'));
const Sports = lazy(() => import('./Hobbies/Sports'));

const Hidden = lazy(() => import('./hidden/Hidden'));
const BirthdayCard = lazy(() => import('./hidden/birthday/BirthdayCard'));
const BirthdayButton = lazy(() => import('./hidden/birthday/BirthdayButton'));
const Politicians = lazy(() => import('./hidden/trading/Politicians'));

const App = () => {
  return (
    <main className="bg-black">
      <Suspense fallback={<Loader loading={true} />}>
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
          <Route path="Surprise/:name" element={<BirthdayButton />} />
          <Route path="trading" element={<Politicians />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
