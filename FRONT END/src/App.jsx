// import './App.css'
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import FormPut from './components/FormPut/FormPut.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/navigation" element={<NavigationBar />} />
        <Route path="/edit/:id" element={<FormPut />} />
        <Route path="/create" element={<Form />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
