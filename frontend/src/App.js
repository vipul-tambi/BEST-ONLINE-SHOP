import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user-components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />

      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route
            path="/product-list/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/search/:searchQuery"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/search/:searchQuery/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            exact
            path="/product-details/:id"
            element={<ProductDetailsPage />}
          />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="*" element="Page not exists 404" />
        </Route>

        {/*USER ROUTES*/}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          {" "}
          <Route exact path="/user" element={<UserProfilePage />} />
          <Route exact path="/user/my-orders" element={<UserOrdersPage />} />
          <Route
            exact
            path="/user/cart-details"
            element={<UserCartDetailsPage />}
          />
          <Route
            exact
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/*ADMIN ROUTES */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route exact path="/admin/users" element={<AdminUsersPage />} />
          <Route
            exact
            path="/admin/edit-user/:id"
            element={<AdminEditUserPage />}
          />
          <Route exact path="/admin/products" element={<AdminProductsPage />} />
          <Route
            exact
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            exact
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          />
          <Route exact path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            exact
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route exact path="/admin/chats" element={<AdminChatsPage />} />
          <Route
            exact
            path="/admin/analytics"
            element={<AdminAnalyticsPage />}
          />
        </Route>
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
