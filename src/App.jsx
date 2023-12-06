import { Routes, Route } from "react-router";
import Navs from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Galeri from "./pages/Galeri";

function App() {
  return (
    <>
      <div>
        <Navs />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/produk" Component={Produk} />
          <Route path="/galeri" Component={Galeri} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
