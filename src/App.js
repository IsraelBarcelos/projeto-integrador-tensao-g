import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InsertScreen } from "./screens/InsertScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import { Samples } from "./screens/Samples";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InsertScreen />} />
            <Route path="/amostras/" element={<Samples />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
