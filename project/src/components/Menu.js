import React from "react";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from "react-bootstrap";
import ReactTooltip from "react-tooltip";



export const Menu = () => {

  return (
    <div>
      <div className="item8">
        <div className="container item7">
          <div className="row">
            <div className="col-4">
              <Button variant="light" className="item5">Back to Cursus</Button>
            </div>
            <div className="col-4 item6">
              <a href="index.html"><img src="images/logo.svg" alt="" /></a>
            </div>
            <div className="col-4">
              <img className="img1" src="/images/hd_dp.jpg" data-tip data-for="registerTip" />
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip id="registerTip" place="top" effect="float">
      <h6>Abhishek Singh</h6>
      <p>Shahid Karnail Singh Nagar, Near Pakhowal</p>
      <p>Road. Ludhiana, Punjab, 141013 India</p>
    </ReactTooltip>
      <div className="container item">
        <Navbar bg="light" variant="light">
          <Nav className="me-auto">
            <Nav.Link >Home  /</Nav.Link>
            <Nav.Link >Paid Membership   /</Nav.Link>
            <Navbar.Brand>Checkout</Navbar.Brand>
          </Nav>
        </Navbar>
      </div>
      <br />
      <div className="row">
        <div className="container item2 col-lg-9">
          <h5>Checkout</h5>
          <h6>Billing Details</h6>
          <img src="images/line.svg" alt="" /><br/><br/>
          <div className="col-lg-9">
            <div class="address_text">
              Abhishek Singh<br />
              #1234 Street No. 45, Ward No. 60, Phase 3,<br /> Shahid
              Karnail Singh Nagar, Near
              Pakhowal<br /> Road.<br />
              Ludhiana, Punjab, 141013<br />
              India
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="checkout_title">
            <h5>Order Summary</h5>
            <img src="images/line.svg" alt="" />
          </div>
          <div class="order_dt_section">
            <div class="order_title">
              <h6>Baby Plan</h6>
              <div class="order_price">$49</div>
            </div>
            <div class="order_title">
              <h6>Taxes(GST)</h6>
              <div class="order_price">$2</div>
            </div>
            <div class="order_title">
              <h3>Total</h3>
              <div class="order_price5">$51</div>
            </div>
            <div class="scr_text"><i
              class="uil uil-lock-alt"></i>Secure
              checkout</div>
          </div>
        </div></div>
    </div>

  )
}

export default Menu;