import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Que tal React Router Present" />}
          />
          <Route
            path="/especie/:especieid"
            element={<ItemListContainer title="Alimentos" />}
          />
          <Route
            path="/producto/:itemid"
            element={<ItemDetailContainer id={4} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
