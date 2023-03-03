import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Modal from './Components/Modal';
import Tabs from './Components/Tabs';
import Popular from './pages/Popular';
import TopRates from './pages/TopRates';
import Upcoming from './pages/Upcoming';
import SearchResult from './pages/SearchResult';
import Favourite from './pages/Favourite';

function App() {
  return (
    <div className="App">
       <Modal />
       <BrowserRouter>
       <Header />
       <main className="bg-transparent w-5/6 mx-auto h-[500px] min-h-full rounded-b-lg">
         <Banner />
           <Tabs />
           <Routes>
             <Route path="/" element={<Popular />} index={true}/>
             <Route path="/topRated" element={<TopRates />} />
             <Route path="/upComing" element={<Upcoming />} />
             <Route path="/search" element={<SearchResult />} />
             <Route path="/favourites" element={<Favourite />} />
           </Routes>
           </main>
           </BrowserRouter>
    </div>
  );
}

export default App;
