//shota beriashvili

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const initialValues = {firstname:"", lastname: "",address:"", email: "", password: "",email2: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }

    if (!values.lastname) {
      errors.lastname = "lastname is required!";
    }

    if (!values.address) {
      errors.address = "address is required!";
    }else if (values.address.length < 6) {errors.password = "address must be more than 6 characters";}
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length != 4) {
      errors.password = "Password must contain 4 characters";
    } 

    if (!values.email2) {
      errors.email2 = "Email is required!";
    } else if (!regex.test(values.email2)) {
      errors.email2 = "This is not a valid email format!";
    }

    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length != 4) {
      errors.password2 = "Password must contain 4 characters";
    } 

    return errors;
  };


  const initialValues2 = {email2: "", password2: "" };
  const [formValues2, setFormValues2] = useState(initialValues2);
  const [formErrors2, setFormErrors2] = useState({});
  const [isSubmit2, setIsSubmit2] = useState(false);

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues2({ ...formValues2, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setFormErrors2(validate(formValues2));
    setIsSubmit2(true);
  };

  useEffect(() => {
    console.log(formErrors2);
    if (Object.keys(formErrors2).length === 0 && isSubmit2) {
      console.log(formValues2);
    }
  }, [formErrors2]);



 const validate2 = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.email2) {
      errors.email2 = "Email is required!";
    } else if (!regex.test(values.email2)) {
      errors.email2 = "This is not a valid email format!";
    }

    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length != 4) {
      errors.password2 = "Password must contain 4 characters";
    } 

    return errors;
  };




  return (
    <div className="App">
      <h1 className="h1">welcome to our BarberShop!</h1>
      <h2 className="h2">are you a barber or a client?</h2>
      <div className="div2">
        <form className="form1" onSubmit={handleSubmit}>
          <div>
           <p><label className='label1' for="firstname">Firstname</label></p>
           <p><input type="text" name="firstname" placeholder='firstname' value={formValues.firstname} onChange={handleChange}/></p>
          </div>
          <p>{formErrors.firstname}</p>

          <div>
           <p><label className='label1' for="lastname">Lastname</label></p>
           <p><input type="text" name="lastname" placeholder='lastname' value={formValues.lastname} onChange={handleChange}/></p>
          </div>
          <p>{formErrors.lastname}</p>

          <div>
           <p><label className='label1' for="email">Email</label></p>
           <p><input type="email" name="email" placeholder='email' value={formValues.email} onChange={handleChange}/></p>
          </div>
          <p>{formErrors.email}</p>

          <div>
           <p><label className='label1' for="address">Address</label></p>
           <p><input type="text" name="address" placeholder='address' value={formValues.address} onChange={handleChange}/></p>
          </div>
          <p>{formErrors.address}</p>

          <div>
           <p><label className='label1' for="price">Price(USD)</label></p>
           <p><input type="number" name="price" placeholder='price' min="1" max="50"/></p>
          </div>

          <div>
           <p><label className='label1' for="password">Password</label></p>
           <p><input type="password" name="password" placeholder='password' value={formValues.password} onChange={handleChange}/></p>
          </div>
          <p>{formErrors.password}</p>
          <input type="submit"/>
        </form>
       
        <form className="form2" onSubmit={handleSubmit2}>
          <div>
           <p><label className='label1' for="Email">Email</label></p>
           <p><input type="email" name="email2" placeholder='email' value={formValues2.email2} onChange={handleChange2}/></p>
          </div>
          <p>{formErrors2.email2}</p>
          <div>
           <p><label className='label1' for="Password">Password</label></p>
           <p><input type="password" name="password2" placeholder='password' value={formValues2.password2} onChange={handleChange2}/></p>
          </div>
          <p>{formErrors2.password2}</p>
          <input type="submit"/>
        </form>
       
      </div>

    </div>
  );
}

export default App;
