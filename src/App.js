import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import DisplayJobs from './components/displaJobs/displayJobs';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import Single from './components/single/single';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className="App"><Header /><SearchBar /><DisplayJobs /></div>}></Route>
        <Route path='/single' element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
