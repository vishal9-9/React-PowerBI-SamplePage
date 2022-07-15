import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Report1 from './components/Report1';
import Report2 from './components/Report2';
import Error from './components/Error';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="logo">
              LOGO
            </div>
            <div className="menu">
              <ul>
                <li><a href="/report/1">Report 1</a></li>
                <li><a href="/report/2">Report 2</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path='report/1' element={<Report1 />}></Route>
          <Route path='report/2' element={<Report2 />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
      <footer>
        <div className="menu-icon">
          <p>hsdfkjh</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
