import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Menu from './component/Menu';
import FoodState from './Context/FoodState';
import "./style/App.scss"

const App = () => {
  return (
    <BrowserRouter>
      <FoodState>

        <Header />
        <Route exact path="/" component={Main} />
        <Switch>
          <Route path="/haqqimizda" component={About} />
          <Route path="/menu/:name" component={Menu} />
        </Switch>

        <Footer />
      </FoodState>
    </BrowserRouter>
  )
}

export default App;
