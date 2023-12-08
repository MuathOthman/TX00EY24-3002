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

  useEffect(() => {
    fetch(`/api/property/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProperty(data))
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
        <Minicard />
      </div>
    </div>
  );
};

export default Single;
