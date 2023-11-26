import React, {useEffect, useState} from 'react';
import './CSS/single.css';
import Chartcontainer1 from "./Chartcontainer1/Chartcontainer1";
import Picturecontainer from "./Picturecontainer/Picturecontainer";
import Minicard from "./Minicard/Minicard";
import {useParams} from "react-router-dom";
// import {apartments} from "../../DATATESTING/data";


const Single = () => {
    const { id} = useParams();
    console.log(id);
    const [property, setProperty] = useState(null);

    // useEffect(() => {
    //     apartments.forEach((apartment) => {
    //         if (apartment.id === parseInt(id)) {
    //             setProperty(apartment);
    //             console.log(apartment);
    //         }
    //     });

    // }, [id]);

    return (
        <div className="single">
            <div className="picturecontainer"><Chartcontainer1 property={property}/></div>
            <div className="chartcontainer1"><Picturecontainer property={property}/></div>
            <div className="chartcontainer2"><Minicard/></div>
        </div>
    );
}

export default Single;