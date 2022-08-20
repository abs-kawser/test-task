import React, { useState } from 'react';
import './From.css';
import { useFormik } from 'formik';
import Table from '../table/Tabledata.js';
import Tabledata from '../table/Tabledata.js';


const Form = () => {
    const [fromData, setFromdata] = useState([])

    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            mobile: "",
            dateOfBirth: "",
            Sex: "",
            GovtIssuedId: "",
            guardianDetails: "",
            emgCnumber: "",

            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",

            occupation: "",
            religion: "",
            maritalStatus: "",
            bloodgroup: "",
            nationality: "",



        },

        onSubmit: values => {
            setFromdata(values)
            console.log(values);

            // console.log('From data', values);
        }

    })
    // console.log("from data", fromData);
    //console.log('from values', formik.values);
    // maritalStatus
    //onSubmit={ ()=> formik.handleSubmit}



    //  const handleSubmit = ()=> {
    //        setFromdata(formik.initialValues)
    //  }


    //  console.log(fromData?.map(item => item.name));
    console.log(fromData.name);



    return (

        <div className="main">
            <form className="formdata" onSubmit={formik.handleSubmit}>

                <section className="Personal-Details">

                    <h1>Personal Details</h1>

                    <label htmlFor='name'>Name</label>
                    <input placeholder="Enter Name" type="text" id="name" name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name} />

                    <label htmlFor='mobile'>mobile</label>
                    <input placeholder="Enter Mobile" type="mobile" id="mobile" name='mobile'
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                    />

                    <label htmlFor='DateofBirth'>Date of Birth</label>
                    <input placeholder="DD/MM/YYYY or Age in years" type="text" id="dateOfBirth" name='dateOfBirth'
                        onChange={formik.handleChange}
                        value={formik.values.dateOfBirth}
                    />

                    <label htmlFor='Govt Issued Id'>Govt Issued Id</label>
                    <input placeholder="ID Type" type="text" id="GovtIssuedId" name='GovtIssuedId'
                        onChange={formik.handleChange}
                        value={formik.values.GovtIssuedId}
                    />


                </section>
                <br />
                <br />
                <br />
                {/* Contact detail section */}
                <section className="Contact Detail">

                    <h1>Contact Details</h1>

                    <label htmlFor='Guardian Details'><span>Guardian  Details:</span>
                        <select>
                            <option value={formik.values.guardianDetails}>Father</option>
                            <option value={formik.values.guardianDetails}>Mother</option>
                        </select>

                        <input placeholder="Guardian Details" type="text" id="guardianDetails" name='guardianDetails'
                            onChange={formik.handleChange}
                            value={formik.values.guardianDetails}
                        />
                    </label>

                    <label htmlFor='email'>Email</label>
                    <input placeholder="Enter email" type="email" id="email" name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email} />

                    <label htmlFor='Emergency Contact Number'>Emergency Contact Number:</label>
                    <input placeholder="Emergency Contact Number" type="mobile" id="emgCnumber" name='emgCnumber'
                        onChange={formik.handleChange}
                        value={formik.values.emgCnumber} />


                </section>
                <br />
                <br />
                <br />

                {/*Adress Details  */}

                <section className="Adress Details ">

                    <h1>Adress Details </h1>

                    <label htmlFor='Address'>Address</label>
                    <input placeholder="Address" type="text" id="address" name='address'
                        onChange={formik.handleChange}
                        value={formik.values.address} />

                    <label htmlFor='State'>State</label>
                    <input placeholder="Enter State" type="text" id="state" name='state'
                        onChange={formik.handleChange}
                        value={formik.values.state} />

                    <label htmlFor='Address'>City</label>
                    <input placeholder="Address" type="text" id="city" name='city'
                        onChange={formik.handleChange}
                        value={formik.values.city} />

                    <label htmlFor='Address'>Country</label>
                    <input placeholder="Country" type="text" id="country" name='country'
                        onChange={formik.handleChange}
                        value={formik.values.country} />

                    <label htmlFor='Pincode'>Pincode</label>
                    <input placeholder="Pincode" type="password" id="pincode" name="pincode"
                        onChange={formik.handleChange}
                        value={formik.values.pincode} />


                </section>
                <br />
                <br />
                <br />
                {/* Other Detail */}
                <section className="otherDetail">
                    <h1>Other Details </h1>

                    <label htmlFor='occupation'>Occupation</label>
                    <input placeholder="occupation" type="text" id="occupation" name='occupation'
                        onChange={formik.handleChange}
                        value={formik.values.occupation} />

                    <label htmlFor='occupation'>Religion</label>
                    <input placeholder="Religion" type="text" id="religion" name='religion'
                        onChange={formik.handleChange}
                        value={formik.values.religion} />


                    <label htmlFor='MaritalStatus'>Marital Status</label>
                    <input placeholder="Marital-Status" type="text" id="maritalStatus" name='maritalStatus'
                        onChange={formik.handleChange}
                        value={formik.values.maritalStatus} />

                    <label htmlFor='Blood group'>Blood group</label>
                    <input placeholder="Blood group" type="text" id="bloodgroup" name='bloodgroup'
                        onChange={formik.handleChange}
                        value={formik.values.bloodgroup} />


                    <label htmlFor='Nationality'>Nationality</label>
                    <input placeholder="Nationality" type="text" id="nationality" name='nationality'
                        onChange={formik.handleChange}
                        value={formik.values.nationality} />


                </section>


                <br />
                <br />
                <br />
                <button type="submit">Submit</button>

            </form>
             <br />
            <div>
                <Tabledata data={fromData} />
            </div>

        </div>
    );
};

export default Form;