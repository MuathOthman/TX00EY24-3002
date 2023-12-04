import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Sidenav from "./Dashboard/Panels/Sidenav";
import Menubars from "./Dashboard/Panels/Menubars";
import Dashboard from "./Dashboard";
import Property from "./Property/Property";
import Single from "./Property/Single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./UserForm/Sign In/Signin";
import SettingsUserProfile from "./SettingsUserProfile";
import PopUpForm from "./PopUpForm";
import Overall from "./Overall/Overall";

function Main() {
    const isSignedIn = !!localStorage.getItem('token');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn && location.pathname !== '/signin') {
            navigate('/signin');
        }
    }, [isSignedIn, location, navigate]);

    return (
        <div className="App">
            {isSignedIn && (
                <div className="parent">
                    <div className="wrapper">
                        <div className="one"><Sidenav/></div>
                        <div className="two"><Menubars/></div>
                        <div className="program">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/property" element={<Property />} />
                                <Route path="/property/:id" element={<Single />} />
                                <Route path="/settings" element={<SettingsUserProfile />} />
                                <Route path="/add-property" element={<PopUpForm />} />
                                <Route path="/overall" element={<Overall/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            )}
            <Routes>
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
}

export default App;