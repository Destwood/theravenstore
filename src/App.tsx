import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
