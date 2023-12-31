import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </ShopContextProvider>
    </div>
  );
}

export default App;
