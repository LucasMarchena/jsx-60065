import { Counter } from "./components/common/counter/Counter";
import { Navbar } from "./components/layout/navbar/Navbar";
// import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <Counter />
    </>
  );
}

export default App;
