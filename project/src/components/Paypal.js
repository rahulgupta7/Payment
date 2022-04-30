import React from 'react'
import './Paypal.css'
import { Button } from 'react-bootstrap'

export const Paypal = () => {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-md-12">
                    <p class="t-body">After payment
                        via PayPal's secure
                        checkout, we will send
                        you a link to download
                        your files.</p>
                    <div class="media h-mt2">
                        <div
                            class="media__item -align-center">
                            <p
                                class="t2-body h-m0">
                                PayPal
                                accepts
                            </p>
                        </div>
                        <div
                            class="media__body">
                            <ul id="paypal-gateway"
                                class="financial-institutes">
                                <li
                                    class="financial-institutes__logo">
                                    <img alt="Visa"
                                        title="Visa"
                                        src="images/membership/pyicon-1.svg"/>
                                </li>
                                <li
                                    class="financial-institutes__logo">
                                    <img alt="MasterCard"
                                        title="MasterCard"
                                        src="images/membership/pyicon-2.svg"/>
                                </li>
                                <li
                                    class="financial-institutes__logo">
                                    <img alt="American Express"
                                        title="American Express"
                                        src="images/membership/pyicon-3.svg"/>
                                </li>
                                <li
                                    class="financial-institutes__logo">
                                    <img alt="Discover"
                                        title="Discover"
                                        src="images/membership/pyicon-4.svg"/>
                                </li>
                                <li
                                    class="financial-institutes__logo">
                                    <img alt="China UnionPay"
                                        title="China UnionPay"
                                        src="images/membership/pyicon-5.svg" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Button className="item4"  type="submit">Confirm Checkout</Button><br/><br/>
        </div>
    )
}
