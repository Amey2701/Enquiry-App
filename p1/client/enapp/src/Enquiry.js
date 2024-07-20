import { useState, useRef } from "react"; // Importing necessary hooks from React
import axios from "axios"; // Importing axios for making HTTP requests

export default function Enquiry() {
    // Using useRef to manage references to form inputs
    const rName = useRef();
    const rPhone = useRef();
    const rQuery = useRef();

    // Using useState to manage state for form inputs and message
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");

    // Handler functions to update state on input change
    const hName = (event) => { setName(event.target.value); }
    const hPhone = (event) => { setPhone(event.target.value); }
    const hQuery = (event) => { setQuery(event.target.value); }

    // Function to handle form submission
    const save = (event) => {
        event.preventDefault(); // Preventing default form submission
        let data = { name, phone, query }; // Preparing data to send
        let url = "https://enqapp-5gov.onrender.com/save"; // URL to send data to
        axios.post(url, data) // Sending data using axios POST request
            .then(res => {
                console.log(res, data); // Logging response and data
                setMsg("We will get back to you!!!!"); // Setting success message
                setName(""); // Clearing name field
                setPhone(""); // Clearing phone field
                setQuery(""); // Clearing query field
                rName.current.focus(); // Setting focus back to name input
            })
            .catch(err => setMsg("Issue" + err)); // Handling errors
    }

    // Function to clear form fields and message
    const clear = () => {
        setName(""); // Clearing name field
        setPhone(""); // Clearing phone field
        setQuery(""); // Clearing query field
        setMsg(""); // Clearing message
        rName.current.focus(); // Setting focus back to name input
    }

    return (
        <>
            <center>
                <h1 className="form-title">
                    Fill the Form
                </h1>
                <form onSubmit={save} className="form-container">
                    <input type="text" placeholder="Enter your Name" onChange={hName} ref={rName} value={name} className="input-field" />
                    <br /><br />
                    <input type="number" placeholder="Enter your Phone Number" onChange={hPhone} ref={rPhone} value={phone} className="input-field" />
                    <br /><br />
                    <textarea placeholder="Enter your Query" rows={4} cols={30} onChange={hQuery} ref={rQuery} value={query} className="textarea-field" />
                    <br /><br />
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    <button type="button" onClick={clear} className="clear-button">Clear</button>
                </form>
                <h2 className="message">{msg}</h2>
            </center>
            <footer className="footer">
                <strong>
                Made by Amey Mali (7517359266)
                </strong>
            </footer>
        </>
    );
}
