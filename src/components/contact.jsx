import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/contact.css';

class Contact extends Component {
    render() {
        const contactInfo = [
            { label: "Name", value: "Dr. Victor Von Doom" },
            { label: "Email", value: "dr.doom@latveria.gov" },
            { label: "Phone", value: "+1-800-DOOM" },
            { label: "Address", value: "Castle Doom, Latveria" },
            { label: "Website", value: "www.latveria.gov" }
        ];

        return (
            <div className="col-12  d-flex justify-content-center p-5 bg-dark mt-3">
                <div className="card contact-card bg-dark doom-green">
                    <ul className="list-group list-group-flush doom-green bg-dark p-3">
                        {contactInfo.map((info, index) => (
                            <li key={index} className="list-group-item p-3 doom-green bg-dark fs-2">
                                {info.label}: {info.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;