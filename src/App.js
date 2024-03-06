import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/routes/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import ManageAccount from "../src/components/Account/ManageAccount/ManageAccount";
import MyAccount from "../src/components/Account/MyAccount/MyAccount";
import Shop from "../src/components/Shop/Shop";
import ItemView from "../src/routes/ItemView";
import CategoryView from "../src/routes/CategoryView";
import SearchView from "../src/routes/Search";
import CartItemsProvider from "../src/Context/CartItemsProvider";
import Login from "../src/components/Authentication/Login/Login";
import Register from "../src/components/Authentication/Register/Register";
import Wishlist from "../src/components/Wishlist";
import WishItemsProvider from "./Context/WishItemsProvider";
import DrawerNav from "../src/components/Nav/DrawerNav/DrawerNav";
import Checkout from "../src/components/Checkout/Checkout";
import SearchProvider from "../src/Context/SearchProvider";

function App() {
  return (
    <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/account">
                <Route path="me" element={<MyAccount />} />
                <Route path="manage" element={<ManageAccount />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Login />} />
              </Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/category">
                <Route path=":id" element={<CategoryView />} />
              </Route>
              <Route path="/item">
                <Route path="/item/men">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/women">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/kids">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />} />
                </Route>
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
              <Route path="/admin" element={<Wishlist />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
    </CartItemsProvider>
  );
}

export default App;
