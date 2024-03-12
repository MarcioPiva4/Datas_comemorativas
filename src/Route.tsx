import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import { useEffect } from "react";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="festa-cerejeira" element={<Page1/>}></Route>
          <Route path="aniversario-garca" element={<Page2/>}></Route>
          <Route path="dia-meio-ambiente" element={<Page3/>}></Route>
          <Route path="dia-da-mulher" element={<Page4/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
