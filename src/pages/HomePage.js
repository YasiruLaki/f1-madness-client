import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}

export default HomePage;