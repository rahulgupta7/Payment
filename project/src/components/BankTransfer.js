import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BankTransfer = () => {
    const [input, setInput] = useState({
        name: '',
        AccountNumber: '',
        BankName: '',
        IFSCcode: ''
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
        const bankPayment = {
            name: input.name,
            AccountNumber: input.AccountNumber,
            BankName: input.BankName,
            IFSCcode: input.IFSCcode
        }

        axios.post('http://localhost:8080/BankTransfer', bankPayment)
    }

    return (
        <div className='container'>
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div
                            class="ui search focus mt-30 lbel25">
                            <label>Account
                                Holder
                                Name</label>
                            <div
                                class="ui left icon input swdh11 swdh19">
                                <input class="prompt srch_explore"
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleChange}
                                    required=""
                                    maxlength="64"
                                    placeholder="Enter Your Full Name" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div
                            class="ui search focus mt-30 lbel25">
                            <label>Account
                                Number</label>
                            <div
                                class="ui left icon input swdh11 swdh19">
                                <input class="prompt srch_explore"
                                    type="text"
                                    name="AccountNumber"
                                    value={input.AccountNumber}
                                    onChange={handleChange}
                                    maxlength="10"
                                    placeholder="Enter Account Number" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 item4">
                        <div
                            class="lbel25 mt-30">
                            <label>Bank
                                Name</label>
                            <select class="ui hj145 dropdown cntry152 prompt srch_explore"
                                name="BankName" value={input.BankName} onChange={handleChange}>
                                <option
                                    value="">
                                    State
                                    Bank
                                    of
                                    India
                                </option>
                                <option
                                    value="1">
                                    Indian
                                    Bank
                                </option>
                                <option
                                    value="2">
                                    ICICI
                                    Bank
                                </option>
                                <option
                                    value="3">
                                    HDFC
                                    Bank
                                </option>
                                <option
                                    value="4">
                                    Yes
                                    Bank
                                </option>
                                <option
                                    value="5">
                                    Oriental
                                    Bank
                                </option>
                                <option
                                    value="6">
                                    Punjab
                                    National
                                    Bank
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 item4">
                        <div
                            class="ui search focus mt-30 lbel25">
                            <label>IFSC
                                Code</label>
                            <div
                                class="ui left icon input swdh11 swdh19">
                                <input class="prompt srch_explore"
                                    type="text"
                                    name="IFSCcode"
                                    value={input.IFSCcode}
                                    onChange={handleChange}
                                    maxlength="10"
                                    placeholder="Enter IFSC Code" />
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="item4" onClick={handleClick} type="submit">Confirm Checkout</Button>
                <ToastContainer /><br/><br/>
            </form>
        </div>
    )
}
