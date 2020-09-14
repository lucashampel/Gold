import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Perfil from './components/pages/Perfil';
import Conectar from './components/pages/Conetar';
import Conexoes from './components/pages/Conexoes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/perfil' component={Perfil} />
        <Route path='/conexoes' component={Conexoes} />
        <Route path='/conectar' component={Conectar} />
      </Switch>
    </Router>
  );
}

export default App;