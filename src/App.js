import "./App.css";
import BoxMilk from "./components/BoxMilk/BoxMilk";
import { products } from "./data (1)";

function App() {
  return (
    <div>
      {products.map((product) => (
        <BoxMilk
          src={product.image}
          name={product.name}
          description={product.desc}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
