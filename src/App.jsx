import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Contact from "../src/pages/contact";
import './styles/app.css';
import Signin from "./pages/signin";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<Signin />} />/
            </Routes>
        </BrowserRouter>
    );
}