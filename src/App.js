import './App.scss'
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';

function App() {
  return (
    <div className="App">
        <Header 
        number = {11}
        />

        <SearchBar />


    </div>
  );
}

export default App;
