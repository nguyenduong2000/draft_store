import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import MainLayout from './components/layouts/MainLayout';
import { Download } from './pages/download';
function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<Download />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
