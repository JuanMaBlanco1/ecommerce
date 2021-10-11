import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./componentes/Navbar/index";
import Footer from "./componentes/Footer/index";
import Home from "./paginas/Home/index";
import Cart from "./paginas/Cart/index";
import ItemDetailPage from "./paginas/ItemDetailPage/index";
import Categories from "./paginas/Categorias/index";
import Form from "./paginas/Form/index";

import CartContext from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Taberna del cervecero";

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <Router>
          <CssBaseline>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home greeting={greeting} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/item/:id">
                <ItemDetailPage />
              </Route>
              <Route path="/categories/:categoryId">
                <Categories />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Footer />
          </CssBaseline>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;

