import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Layouts
import Layouts from "./components/layouts/index";

//Import Pages
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={"<Home />"} />
            <Route path="/about" element={"<About />"} />
            <Route path="/contact" element={"<Contact />"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
