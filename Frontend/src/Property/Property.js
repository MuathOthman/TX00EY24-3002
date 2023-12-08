import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './CSS/property.css';
import PopUpForm from "../PopUpForm";
import SiteName from "../Sitename/SiteName";

const Property = () => {
    const [apartments, setApartments] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('/api/property/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => setApartments(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <SiteName name="Property" />
        <div className="Property">
            {apartments.map((apartment) => (
                <Card key={apartment.id} {...apartment} />
            ))}
        </div>
        </div>
    );
};

export default Property;
