import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';
import ThemeSwitcher from './assets/components/Thème';


// Importez vos composants de page ici
import Accueil from './assets/components/home/Accueil';
import Chatbot from './assets/components/bot/Chatbot';
import YoutubeLinks from './assets/components/NosChaines/YouTubes';
import NosFilms from './assets/components/Films/YouTube';
import AideAuxAinés from './assets/components/services/seniors';
import Mentale from './assets/components/services/sante-mentale';
import AideEducative from './assets/components/services/aide-educative';
import AideSoutien from './assets/components/services/aide-soutien';
import ServiceMedia from './assets/components/services/medias';
import NosObjectifs from './assets/components/objectifs/nos-objectifs';
import NosProjets from './assets/components/objectifs/nos-projets';
import NotreVision from './assets/components/objectifs/notre-vision';
import Histoire from './assets/components/history/notre-histoire';
import Partenariats from './assets/components/partenariats/partenaire';
import Emplois from './assets/components/job/emplois';
import Benevolat from './assets/components/job/Benevole';
import ScrollToTop from './assets/components/ScrollTop/ScrollTop';




const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div id='afterNav'>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/YouTubes" element={<YoutubeLinks />} />
            <Route path="/YouTube" element={<NosFilms />} />
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="/seniors" element={<AideAuxAinés />} />
            <Route path="/sante-mentale" element={<Mentale />} />
            <Route path="/aide-educative" element={<AideEducative />} />
            <Route path="/aide-soutien" element={<AideSoutien />} />
            <Route path="/medias" element={<ServiceMedia />} />
            <Route path="/nos-objectifs" element={<NosObjectifs/>} />
            <Route path="/nos-projets" element={<NosProjets/>} />
            <Route path="/notre-vision" element={<NotreVision />} />
            <Route path="/notre-histoire" element={<Histoire />} />
            <Route path="/partenaire" element={<Partenariats />} />
            <Route path="/emplois" element={<Emplois/>} />
            <Route path="/Benevole" element={<Benevolat/>} />
          </Routes>
        </div>
        <div className="h-screen w-screen fixed z-50">
          <ThemeSwitcher />
        </div>
      </Router>
    </>
  );
};

export default App;
