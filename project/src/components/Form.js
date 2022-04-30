import React, { useState } from "react";
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";

export const Form = () => {

        const [edit, setEdit] = useState(false);

        const editClick = () => {
                setEdit(!edit)
        }
        return (
                <div>
                        <div className="container">
                               <Button variant="light" className="item3" onClick={editClick}>Edit Address</Button><br/><br/>
                                {edit && (
                                        <form>
                                                <div class="row">
                                                        <div class="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>First Name*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="name" value="Joginder" id="id_name"
                                                                                        required="" maxlength="64" placeholder="First Name" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Last Name*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="surname" value="Singh" id="id_surname"
                                                                                        required="" maxlength="64" placeholder="Last Name" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Academy Name*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="academyname" value="Gambolthemes"
                                                                                        id="id_academy" required="" maxlength="64"
                                                                                        placeholder="Academy Name" />
                                                                        </div>
                                                                        <div className="help-block">If you want your invoices addressed
                                                                                to a academy. Leave blank to use your full name.</div>
                                                                </div>
                                                        </div>
                                                        <Dropdown>
                                                                <Dropdown.Toggle variant="secondary">
                                                                        Country*
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                        <div className="item" data-value="af"><i
                                                                                className="af flag"></i>Afghanistan</div>
                                                                        <div className="item" data-value="ax"><i
                                                                                className="ax flag"></i>Aland Islands</div>
                                                                        <div className="item" data-value="al"><i
                                                                                className="al flag"></i>Albania</div>
                                                                        <div className="item" data-value="ag"><i
                                                                                className="ag flag"></i>Antigua</div>
                                                                        <div className="item" data-value="ar"><i
                                                                                className="ar flag"></i>Argentina</div>
                                                                        <div className="item" data-value="am"><i
                                                                                className="am flag"></i>Armenia</div>
                                                                        <div className="item" data-value="aw"><i
                                                                                className="aw flag"></i>Aruba</div>
                                                                        <div className="item" data-value="zw"><i
                                                                                className="zw flag"></i>Zimbabwe</div>
                                                                </Dropdown.Menu>
                                                        </Dropdown>
                                                        <div className="col-lg-12">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Address1*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="addressname"
                                                                                        value="#1234 Street No. 45, Ward No. 60, Phase 3"
                                                                                        id="id_address1" required="" maxlength="300"
                                                                                        placeholder="Address Line 1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Address2*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="addressname2"
                                                                                        value="Shahid Karnail Singh Nagar, Near Pakhowal Road"
                                                                                        id="id_address2" required="" maxlength="300"
                                                                                        placeholder="Address Line 2" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>City*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="city" value="Ludhiana" id="id_city"
                                                                                        required="" maxlength="64" placeholder="City" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>State / Province / Region*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="state" value="Punjab" id="id_state"
                                                                                        required="" maxlength="64"
                                                                                        placeholder="State / Province / Region" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Zip/Postal Code*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="zip" value="141013" id="id_zip" required=""
                                                                                        maxlength="64" placeholder="Zip / Postal Code" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="ui search focus mt-30 lbel25">
                                                                        <label>Phone Number*</label>
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                                <input className="prompt srch_explore" type="text"
                                                                                        name="phone" value="+91123456789" id="id_phone"
                                                                                        required="" maxlength="12"
                                                                                        placeholder="Phone Number" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <button className="save_address_btn" type="submit">Save
                                                                        Changes</button>
                                                        </div>
                                                </div>




                                        </form>
                                )}
                                                        </div>


                </div >

        )
}

export default Form;