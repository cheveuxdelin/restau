import React from 'react'
import './App.css'

import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';



export default function App() {
  const [selectedView, setSelectedView] = React.useState("home");

  let [restaurantName, nTable] = window.location.pathname.substring(1).split("/");
  restaurantName = decodeURI(restaurantName);

  const rendered_view = {
    "home":<Home handleSelectedView={selectedViewHandler} restaurantName={restaurantName} nTable={nTable}/>,
    "menu": <Menu/>,
    "checkout": <Checkout/>
  };

  function selectedViewHandler(index) {
    setSelectedView(index);
  }

  return rendered_view[selectedView];
}