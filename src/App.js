import './App.css';

import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import CustomNavbar from './layout/CustomNavbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <CustomNavbar />} >
            <Route index element={ <Home />} />
            <Route path="contacts/*" element={ <Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
