// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PincodeScreen from './components/PincodeScreen';
import TypeSelectionScreen from './components/TypeSelectionScreen';
import PlanScreen from './components/PlanScreen';
import Alteration from './components/Alteration';
import PerfectFit from './components/PerfectFit';
import KnowMore from './components/KnowMore';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PincodeScreen />} />
        <Route path="/types" element={<TypeSelectionScreen />} />
        <Route path="/plan" element={<PlanScreen />} />
        <Route path="/alteration" element={<Alteration />} />
        <Route path="/perfect-fit" element={<PerfectFit/>} />
        <Route path="/know-more" element={<KnowMore/>} />
        <Route path="/item-detail" element={<ItemDetail/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App;
