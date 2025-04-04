import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import MainLayout from './components/layouts/MainLayout';
import { Download } from './pages/download';
import { Rank } from './pages/rank';
function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
