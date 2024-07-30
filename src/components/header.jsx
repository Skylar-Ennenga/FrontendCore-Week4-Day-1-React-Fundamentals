import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/header.css';
import drdoom from '../assets/drdoom.jpg';

const Header = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="image-container">
                        <img src={drdoom} alt="DR. Doom" className="img-fluid" />
                        <div className="centered-text">
                            <h1>Introcucing</h1>
                            <h1>Dr. Doom</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;