import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/loadingPage";
import Products from "./pages/products";
const Orders = lazy(() => import("@/pages/orders"));
const ContactUs = lazy(() => import("@/pages/contactUs"));
const AboutUs = lazy(() => import("@/pages/aboutUs"));
const Product = lazy(() => import("@/pages/product"));
const ProductTypes = lazy(() => import("@/pages/productTypes"));
const ProductType = lazy(() => import("@/pages/productType"));
const SignInPage = lazy(() => import("@/pages/signIn"));
const UnAuthorized = lazy(() => import("@/pages/unAuthorized"));
const OrderDetails = lazy(() => import("@/pages/orderDetails"));
const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <App /> : <UnAuthorized />}
        >
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id" element={<OrderDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="product-types" element={<ProductTypes />} />
          <Route path="product-type" element={<ProductType />} />
          <Route path="product-type/:id" element={<ProductType />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routes} />;
    </Suspense>
  );
};

export default Routes;
