import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Report1 from './components/Report1';
import Report2 from './components/Report2';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Report 1</Link>
        <Link to='/1'>Report 2</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Report1 />}></Route>
        <Route path='/1' element={<Report2 />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
