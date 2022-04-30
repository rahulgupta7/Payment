import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./CreditCard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreditCard = () => {
    const [input, setInput] = useState({
        name: '',
        cardNumber: '',
        month: '',
        year: '',
        cvc: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
        toast.success("Payment Successful");
        const newPayment = {
            name: input.name,
            cardNumber: input.cardNumber,
            month: input.month,
            year: input.year,
            cvc: input.cvc
        }

        axios.post('http://localhost:8080/', newPayment)
    }




  return (
    <div className='container'>
    <div className="tab-pane fade show active"
     role="tabpanel"
    aria-labelledby="credit-tab">
    <form>
        <div className="row">
            <div className="col-md-6">
                <div
                    className="ui search focus mt-30 lbel25">
                    <label>Holder
                        Name</label>
                    <div
                        className="ui left icon input swdh11 swdh19">
                        <input className="prompt srch_explore"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleChange}
                            id="id_holdername"
                            required=""
                            maxlength="64"
                            placeholder="Enter Holder Name" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="ui search focus mt-30 lbel25">
                    <label>Card
                        Number</label>
                    <div
                        className="ui left icon input swdh11 swdh19">
                        <input className="prompt srch_explore"
                            type="text"
                            name="cardNumber"
                            value={input.cardNumber}
                            onChange={handleChange}
                            maxlength="16"
                            placeholder="Card #" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 item4">
                <div
                    className="lbel25 mt-30">
                    <label>Expiration
                        Month</label>
                    <select className="ui hj145 dropdown cntry152 prompt srch_explore"
                        name="month" onChange={handleChange} value={input.month}>
                        <option
                            value="">
                            Month
                        </option>
                        <option
                            value="January">
                            January
                        </option>
                        <option
                            value="2">
                            February
                        </option>
                        <option
                            value="3">
                            March
                        </option>
                        <option
                            value="4">
                            April
                        </option>
                        <option
                            value="5">
                            May
                        </option>
                        <option
                            value="6">
                            June
                        </option>
                        <option
                            value="7">
                            July
                        </option>
                        <option
                            value="8">
                            August
                        </option>
                        <option
                            value="9">
                            September
                        </option>
                        <option
                            value="10">
                            October
                        </option>
                        <option
                            value="11">
                            November
                        </option>
                        <option
                            value="12">
                            December
                        </option>
                    </select>
                </div>
            </div>
            <div className="col-md-4 item4">
                <div
                    className="ui search focus mt-30 lbel25">
                    <label>Expiration
                        Year</label>
                    <div
                        className="ui left icon input swdh11 swdh19">
                        <input className="prompt srch_explore"
                            type="text"
                            name="year"
                            value={input.year}
                            onChange={handleChange}
                            maxlength="4"
                            placeholder="Year" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 item4">
                <div
                    className="ui search focus mt-30 lbel25">
                    <label>Expiration
                        Year</label>
                    <div
                        className="ui left icon input swdh11 swdh19">
                        <input className="prompt srch_explore"
                            type="text"
                            name="cvc"
                            value={input.cvc}
                            onChange={handleChange}
                            maxlength="3"
                            placeholder="CVC" />
                    </div>
                </div>
            </div>
        </div>
        <Button variant="primary" className="item4" onClick={handleClick} type="submit">Confirm Checkout</Button>
        <ToastContainer /><br/><br/>
    </form>
</div>
    </div>
  )
}
