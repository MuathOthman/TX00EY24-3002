import MainDashBoard from "../components/MainDashboard";
import Sidenav from "../Dashboard/Panels/Sidenav";
// import { apartments } from "../DATATESTING/data";
import React from "react";
import Card from "./Card/Card";
import("./CSS/property.css");

const Property = () => {
  return (
    <div>
      <MainDashBoard />
      <div className="Property">
        {/* {apartments.map((appartment) => (
          <Card key={appartment.id} {...appartment} />
        ))} */}
      </div>
    </div>
  );
};

export default Property;
