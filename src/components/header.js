import React from "react";
import './header.css';

const  Header = () => {
    return(
        <>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className="brand"><h1>MY COMPANY</h1></div>
        <div className = "table">
        <table>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Class</th>
                <th>Department</th>
                <th>College/Institution</th>
            </tr>
            <tr>
                <td>1.</td>
                <td>John</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Durai</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Kayal</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Hari</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Karthika</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Kumar</td>
                <td>ECE- B</td>
                <td>Electronics and Communication Engineering</td>
                <td>Hindusthan College of Engineering and Technology</td>
            </tr>
        </table>
        </div>
        </>
    );
}


export default Header;