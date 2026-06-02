import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Platform from './pages/Platform';
import MovieDetails from './pages/MovieDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import SubscriptionPlans from './pages/SubscriptionPlans';
import MyPurchases from './pages/MyPurchases';

import './styles/App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform/:platformId" element={<Platform />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/subscriptions" element={<SubscriptionPlans />} />
            <Route path="/mypurchases" element={<MyPurchases />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;