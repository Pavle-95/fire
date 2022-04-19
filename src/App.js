
import './App.scss'
import DisplayJobs from './components/displaJobs/displayJobs';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';



function App() {  

  return (
        <div className="App">
          <Header/>
          <SearchBar/>
          <DisplayJobs/>
        </div>
  );
}

export default App;
