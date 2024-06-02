import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Details from './Page/Details'
import Category from "./Page/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:id" element={<Details/>}/>
          <Route path="movies/:type" element={<Category/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
