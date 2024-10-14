import { Navbar } from "./components/layout/navbar/Navbar";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <CartContainer />
    </>
  );
}

export default App;
