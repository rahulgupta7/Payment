import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form.js';
import Form1 from './components/Form1.js';
import {} from "react-router-dom";
import { CreditCard } from './components/CreditCard';
import { BankTransfer } from './components/BankTransfer';
import { Paypal } from './components/Paypal';
import Navbar from './components/Menu';

import {Breadcrumb} from 'react-bootstrap';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import Menu from './components/Menu';
import { Edit } from './components/Edit';


function App() {
  return (
    <div>
    <Menu />
    <Form />
    <Payment/>
    <Routes>
    <Route exact path="/" element={<CreditCard/>}/>
    <Route exact path="BankTransfer"   element={<BankTransfer/>}/>
    <Route exact path="Paypal"       element={<Paypal/>}/>
    </Routes>
    </div>
  );
}

export default App;
