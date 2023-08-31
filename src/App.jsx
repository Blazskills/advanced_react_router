import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/errorpage/NotFound";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Product } from "./pages/dashboard/product/Product";
import { ProductDetail } from "./pages/dashboard/productDetails/ProductDetail";
import { DashboardHome } from "./pages/dashboard/dashboardhome/DashboardHome";
import { Login } from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import { DashBoardLayout, Layout } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />

            <Route path="dashboard" element={<DashBoardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetail />} />
            </Route>
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
