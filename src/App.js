import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Pages/Home"
import ProductDetail from './Pages/ProductDetail';
import RegisterForm from './Pages/RegisterForm';
import LoginForm from './Pages/LoginForm';
import Menu from "./Components/Menu/Index"
import Comprar from "./Components/Comprar"
import GlobalState from './Context/GlobalState';


function App(){
  return (
    <GlobalState>
    <BrowserRouter>
      <Menu />
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetail} exact />
      <Route path="/register" component={RegisterForm} exact />
      <Route path="/login" component={LoginForm} exact />
      <Route path="/comprar" component={Comprar} exact />

    </BrowserRouter>
    </GlobalState>
  );

}

export default App;
