import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from './Pages/ProductDetail';
import RegisterForm from './Pages/RegisterForm';
import LoginForm from './Pages/LoginForm';
import Menu from "./Components/Menu/Index";
import GlobalState from './Context/GlobalState';
import {Container} from 'react-bootstrap';
import React,{useState} from "react";
import './fonts.css';
import Banner from "./Components/Banner";







function App() {
  const[userLogin,setUserLogin]=useState(false);
  return (
    <GlobalState>
    <BrowserRouter>
      <Menu />
      <Banner />
      <Container className= "MainContainer" > 
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetail} exact />
      <Route path="/register" component={RegisterForm} exact />
      <Route path="/login" component={LoginForm} exact />
      </Container>
    </BrowserRouter>
    </GlobalState>
  );

}

export default App;
