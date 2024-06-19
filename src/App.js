import logo from './logo.svg';
import './App.css';
import Navbar from './elements/navbar';
import Home from './pages/home';
import Footer from './elements/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
