import './App.css';
import { Route } from 'react-router';
import { CountriesList } from './Components/CountryList';
import { Header } from './Components/Header';
import { Search } from './Components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={CountriesList}></Route>
      <Route path="/search" exact component={Search}></Route>
    </div>
  );
}

export default App;
