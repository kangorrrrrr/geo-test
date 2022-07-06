import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import SignUp from './routes/sign-up/sign-up.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

    </Routes>
    
  );
}

export default App;
