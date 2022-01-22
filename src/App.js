import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList.data);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Puta</p>
      </header>
    </div>
  );
}

export default App;
