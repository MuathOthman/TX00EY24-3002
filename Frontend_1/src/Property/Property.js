import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './CSS/property.css';
import PopUpForm from "../PopUpForm";

const Property = () => {
    const [apartments, setApartments] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:8003/api/property/', {
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

    if (apartments.length === 0) {
        return <div><PopUpForm/></div>;
    }

    return (
        <div className="Property">
            {apartments.map((apartment) => (
                <Card key={apartment.id} {...apartment} />
            ))}
        </div>
    );
};

export default Property;
