import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/itemDetailContainer/ItemDetailContainer";
// import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<h2>404 Not Found</h2>} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
