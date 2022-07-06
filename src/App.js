import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import SignUp from './routes/sign-up/sign-up.component';
import Navigation from './routes/navigation/navigation.component';
import Development from './routes/development/development.component';
import Plan from './routes/plan/plan.component';
import About from './routes/about/about.component';

function App() {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/plan" element={<Plan />} />

    </Routes>
    
  );
}

export default App;
