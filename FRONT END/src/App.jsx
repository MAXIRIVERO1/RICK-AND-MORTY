import './App.css'
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
