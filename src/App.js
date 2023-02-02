
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewRest from './components/ViewRest';
import Restuarantlist from './components/Restuarantlist'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Restuarantlist/>}/>
        <Route path='/viewrest/:id' element={<ViewRest/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
