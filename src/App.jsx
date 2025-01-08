import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateArticle from "./pages/CreateArticle"
import PanierArticle from "./pages/PanierArticle"
import Layout from "./layout/Layout"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<CreateArticle />} />
            <Route path="/panier" element={<PanierArticle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App