import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Report1 from './components/Report1';
import Report2 from './components/Report2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Report1 />}></Route>
        <Route path='/1' element={<Report2 />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
