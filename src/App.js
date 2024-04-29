import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Reports from "./components/Dashboard";
import Registration from "./components/Registration";
import MainPage from './components/MainPage';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Registration />
      </Route>
      <Route path="/cart">
        <Header />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Reports />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/contact">
        <Contactus />
      </Route>
      <Route path="/about">
        <Aboutus />
      </Route>
    </BrowserRouter>
  );
}

export default App;
