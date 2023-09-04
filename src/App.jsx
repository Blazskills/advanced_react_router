import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NotFound } from "./pages/errorpage/NotFound";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Product } from "./pages/dashboard/product/Product";
import { loader as productsLoader } from "./pages/dashboard/product/Product";
import { loader as productsLoaderDetails } from "./pages/dashboard/productDetails/ProductDetail";
import { ProductDetail } from "./pages/dashboard/productDetails/ProductDetail";
import { DashboardHome } from "./pages/dashboard/dashboardhome/DashboardHome";
import { Login } from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import { DashBoardLayout, Layout } from "./components";
import { Error } from "./pages/errorthrown/Error";
import { requiredAuth } from "./utils";
import { loader as loginLoader } from "./pages/auth/login/Login";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        {/* <Route element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Route path="dashboard" element={<DashBoardLayout />}>
          <Route
            index
            errorElement={<Error />}
            element={<DashboardHome />}
            loader={async () => await requiredAuth()}
          />
          <Route
            path="product"
            errorElement={<Error />}
            element={<Product />}
            loader={productsLoader}
          />
          <Route
            path="product/:id"
            errorElement={<Error />}
            element={<ProductDetail />}
            loader={productsLoaderDetails}
          />
        </Route>
      </Route>
      <Route
        path="/auth/login"
        element={<Login />}
        loader={loginLoader}
        errorElement={<Error />}
      />
      <Route path="/auth/register" element={<Register />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
