import './App.css';
import logo from './images/logo.svg';
import Navbar from './components/Navbar';
import ThumbnailGallery from './components/ThumbnailGallery';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="d-inline" src={logo} alt="sneakers" />
        <Navbar></Navbar>
      </header>
      <hr />
      <ThumbnailGallery />
      <ProductInfo />
      <AddToCart />
    </div>
  );
}

export default App;
