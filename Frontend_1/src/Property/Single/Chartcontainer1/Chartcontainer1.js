import React, {useEffect, useState} from 'react';
import './chartcontainer1.css';
import Card from "../../../Dashboard/CardDashboard/Card";
import Box from "./Box/Box";
import {useParams} from "react-router-dom";
import {apartments} from '../../../DATATESTING/data';


const Chartcontainer1 = ({property}) => {
    if (!property) {
        return <h1>LOADING ....</h1>; // or any other placeholder/indicator
    }
    return (
        <div className="container1">
            <h1>{property.address}</h1>
            <h2>{property.city}, {property.zipcode}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod blandit justo nec lacinia. Nullam sem dolor, consequat quis porta non, ornare ut nibh. Vestibulum interdum sollicitudin semper. Ut ante tortor, condimentum et sapien at, sollicitudin sollicitudin augue. Nam et arcu hendrerit, porta massa vitae, varius metus. Praesent eget nibh eu sapien placerat condimentum sit amet non ex. Praesent et justo nisl. Praesent varius rhoncus lorem. Mauris feugiat, urna ac viverra porta, ipsum purus ultrices dolor, quis vestibulum lorem purus congue tellus. Ut a turpis pharetra, pellentesque dui nec, dignissim elit. Praesent non turpis faucibus, aliquam elit ut, condimentum felis. In urna ipsum, faucibus at leo quis, facilisis convallis enim. Quisque condimentum nibh nisl, sit amet convallis massa tristique vitae. Vivamus tempus maximus imperdiet. Aenean vel venenatis tortor.
            </p>
        </div>
    );

}
export default Chartcontainer1;