import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Compile from './components/intro/Compile';

const Achievements = React.lazy(() => import('./redirect/Achievements'));
const Research = React.lazy(() => import("./CV/Research"));
const Volunteer = React.lazy(() => import("./hobbies/Volunteer"));
const AnnuloplastyMore = React.lazy(() => import('./CV/ARP/AnnuloplastyMore'));
const Procedure = React.lazy(() => import('./CV/ARP/Procedure'));
const Results = React.lazy(() => import('./CV/ARP/Results'));
const Pet = React.lazy(() => import('./CV/Pet'));
const Hobbies = React.lazy(() => import('./Hobbies/Hobbies'));
const Origami = React.lazy(() => import('./Hobbies/Origami'));
const Embroidery = React.lazy(() => import('./Hobbies/Embroidery'));
const Sports = React.lazy(() => import('./Hobbies/Sports'));
const BirthdayCard = React.lazy(() => import('./hidden/BirthdayCard'));
const Hidden = React.lazy(() => import('./hidden/Hidden'));

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
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
