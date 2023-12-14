import React, {useEffect} from 'react';
import { BarChart, Bar, XAxis, CartesianGrid,YAxis, ResponsiveContainer, PieChart, Pie } from 'recharts';
import SiteName from "../Sitename/SiteName";
import DataCard from "./DataCards/DataCards";
import DataCards from "./DataCards/DataCards";
import ('./CSS/statCard.css');
const Overall = () => {
    const [property, setProperty] = React.useState([]);
    const [propertyAvailable, setPropertyAvailable] = React.useState(0);
    const [propertySold, setPropertySold] = React.useState(0);
    const [propertyCount, setPropertyCount] = React.useState(0);
    const [maintenance, setMaintenance] = React.useState(0);
    const [yearProfit, setYearProfit] = React.useState(0);
    const [monthProfit, setMonthProfit] = React.useState(0);
    const [residential, setResidential] = React.useState(0);
    const [commercial, setCommercial] = React.useState(0);
    const [industrial, setIndustrial] = React.useState(0);
    const [location, setLocation] = React.useState(0);
    const [topInvestment, setTopInvestment] = React.useState(0);
    const [maintenanceCosts, setMaintenanceCosts] = React.useState(0);
    useEffect(() => {
        fetch(`/api/property/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProperty(data);
                console.log(data);

                setPropertyCount(data.length);
                setPropertyAvailable(data.filter((property) => property.available === true).length);
                setPropertySold(data.filter((property) => property.available === false).length);
                setMaintenance(data.filter((property) => property.maintenance === true).length);
                setYearProfit(data.reduce((total, property) => total + property.totalInvestment,0));
                setMonthProfit(data.reduce((total, property) => total + property.monthlyRevenue,0));
                setResidential(data.filter((property) => property.propertyType === "Residential").length);
                setCommercial(data.filter((property) => property.propertyType === "Commercial").length);
                setIndustrial(data.filter((property) => property.propertyType === "Industrial").length);
                setTopInvestment(data.reduce((max, property) => property.totalInvestment > max ? property.totalInvestment : max, data[0].totalInvestment));
                setMaintenanceCosts(data.reduce((total, property) => total + property.totalInvestment,0));
                setLocation( data.country);


            })
            .catch((error) => console.error("Error fetching data:", error));
    }

    , []);
    return (
        <div>
            <SiteName name="Overall"/>
            <DataCards title={"All Properties"} value={propertyCount}/>
            <DataCards title={"Properties available"} value={propertyAvailable}/>
            <DataCards title={"Properties unavailable"} value={propertySold}/>
            <DataCards title={"Maintenance needed"} value={maintenance}/>
            <DataCards title={"Year profit"} value={yearProfit + "€"}/>
            <DataCards title={"Monthly profit"} value={monthProfit + "€"}/>
            <DataCards title={"Residential properties"} value={residential}/>
            <DataCards title={"Commercial properties"} value={commercial}/>
            <DataCards title={"Industrial properties"} value={industrial}/>
            <DataCards title={"Top Country"} value={"Finland"}/>
            <DataCards title={"Top investment"} value={topInvestment + "€"}/>
            <DataCards title={"Maintenance costs"} value={maintenanceCosts/1000 + "€"}/>
        </div>

    );
};

export default Overall;