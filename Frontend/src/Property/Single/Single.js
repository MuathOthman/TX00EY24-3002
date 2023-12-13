import React, { useEffect, useState } from "react";
import "./CSS/single.css";
import Chartcontainer1 from "./Chartcontainer1/Chartcontainer1";
import Picturecontainer from "./Picturecontainer/Picturecontainer";
import Minicard from "./Minicard/Minicard";
import { useParams } from "react-router-dom";
import { apartments } from "../../DATATESTING/data";


const Single = () => {
  const { id } = useParams();
  console.log("Single" + id);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);


  useEffect(() => {
    fetch(`/api/property/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
        setData1(data.totalInvestment);
        setData2(data.monthlyRevenue);
        setData3(data.propertyType);
        setData4(data.maintenance);
        setData5(data.available);
        setData6(data.location);
        setData6(data.area);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  console.log(property);

  return (
    <div className="single">
      <div className="picturecontainer">
        <Chartcontainer1 property={property} />
      </div>
      <div className="chartcontainer1">
        <Picturecontainer property={property} />
      </div>
      <div className="chartcontainer2">
        <Minicard data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>
      </div>
    </div>
  );
};

export default Single;
