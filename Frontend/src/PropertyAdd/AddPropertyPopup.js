import React, { useEffect, useState } from "react";
import "./popup.css";
import {useHistory, useNavigate} from "react-router-dom";
const PopupForm = ({  }) => {
  const token = localStorage.getItem("token");
  const [property, setProperty] = useState({
    address: "",
    city: "",
    country: "",
    zipcode: "",
    totalInvestment: "",
    monthlyRevenue: "",
    area: "",
    image: "",
    available: false,
    maintenance: false,
    propertyType: "Residential",
  });
  const [revenuedata, setRevenueData] = useState();
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/property");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert totalInvestment and monthlyRevenue to numbers
    const newValue =
      name === "totalInvestment" || name === "monthlyRevenue"
        ? parseFloat(value)
        : value;

    setProperty({ ...property, [name]: newValue });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProperty({ ...property, [name]: checked });
  };
  const handleSave  = () => {
    // Perform save action with property data
    console.log("Property:", property);
    fetch("/api/property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(property),
    })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          onClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    fetch(`/api/chart1/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
        .then(response => response.json())
        .then(data => {
            setRevenueData(data[0]);
      console.log("Success:", data);

    fetch("/api/chart1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 5000
      }),
    })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          onClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    if (property.available === false || property.maintenance === true) {
      fetch("/api/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: ` ${property.address}`,
          message: `Needs Maintenance`,
        }),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            onClose();
          })
          .catch((error) => {
            console.error("Error:", error);
          })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            onClose();
          })
          .catch((error) => {
            console.error("Error:", error);
            }
            )}
        }
        )
        .catch((error) => {
          console.error("Error:", error);
        });
    navigate("/property")
    };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Property</h2>
        <form>
          <div className="form-row">
            <div className="form-column">
              <label className="field-popup-field">
                Address:
                <input
                  type="text"
                  name="address"
                  value={property.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={property.city}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  name="country"
                  value={property.country}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Zipcode:
                <input
                  type="text"
                  name="zipcode"
                  value={property.zipcode}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Property Type:
                <select
                  name="propertyType"
                  value={property.propertyType}
                  onChange={handleInputChange}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
                </label>
            </div>
            <div className="form-column">
              <label>
                Total Investment:
                <input
                  type="text"
                  name="totalInvestment"
                  value={property.totalInvestment}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Monthly Revenue:
                <input
                  type="text"
                  name="monthlyRevenue"
                  value={property.monthlyRevenue}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Area:
                <input
                  type="text"
                  name="area"
                  value={property.area}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Image:
                <input
                  type="text"
                  name="image"
                  value={property.image}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Available:
                <input className="checkboxes-pop"
                    type="checkbox"
                    name="available"
                    checked={property.available}
                    onChange={handleCheckboxChange}
                />
              </label>
              <label>
                Maintenance:
                <input className="checkboxes-pop"
                    type="checkbox"
                    name="maintenance"
                    checked={property.maintenance}
                    onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </div>
          <buttones className="bottom-save-button" type="button" onClick={handleSave}>
            Save
          </buttones>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;