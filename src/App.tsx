import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import MainLayout from './components/layouts/MainLayout';
import Accounts from './pages/accounts/Accounts';
import { Infomation } from './pages/infomation/Infomation';
function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/info" element={<Infomation />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
