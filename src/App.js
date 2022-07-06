import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/home/home.component';

function App() {
  return (
    <Route path="/" element={<Home />}></Route>
  );
}

export default App;
