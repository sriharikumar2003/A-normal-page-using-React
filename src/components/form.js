import React from "react";
import './form.css';

const Form = () =>{
    return(
        <form>
            <h1>Registration Form</h1>
            <label>Name :</label><br />
            <input type="text" placeholder="Enter name"/><br />
            <label>E-mail :</label><br />
            <input type="mail" placeholder="Enter mail" /><br />
            <label>Password :</label><br />
            <input type="password" placeholder="********"/><br />
            <button id="submit">submit</button>
            <button id="clear">clear</button>
        </form>
    );
}
export default Form;