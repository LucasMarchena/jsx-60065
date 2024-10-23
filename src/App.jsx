import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer/ItemListContainer";

// import { CartContainer } from "./components/pages/cart/CartContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* <CartContainer /> */}
    </>
  );
}

export default App;
