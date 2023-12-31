import './App.css'
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Cards from './components/Cards/Cards.jsx';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  )
}

export default App
