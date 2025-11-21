import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenidos a nuestra tienda" />
          }
        />

        <Route
          path="/category/:category"
          element={
            <ItemListContainer greeting="Descubrí la magia de nuestras joyas" />
          }
        />

        <Route path="/product/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
