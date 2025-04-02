import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import MainLayout from './components/layouts/MainLayout';
function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
