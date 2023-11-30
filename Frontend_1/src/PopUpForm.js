import React, { useState } from 'react';
import './AddPropertyPopup/PropertyPopUpCSS.css';
import Field from './AddPropertyPopup/Field';
import { SaveButton } from './AddPropertyPopup/ButtonSave';
import AreaField from './AddPropertyPopup/AreaField';
import PropertyTypeCheckbox from './AddPropertyPopup/PropertyTypeCheckbox';
import { ButtonClose } from './AddPropertyPopup/ButtonClose';

const PopUpForm = () => {
    const [modal, setModal] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [stateRegion, setStateRegion] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [totalInvestment, setTotalInvestment] = useState('');
    const [monthlyRevenue, setMonthlyRevenue] = useState('');
    const [area, setArea] = useState('');

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleAddressChange = (data) => {
        setAddress(data);
    }

    const handleCityChange = (data) => {
        setCity(data);
    }

    const handleStateRegionChange = (data) => {
        setStateRegion(data);
    }

    const handleZipcodeChange = (data) => {
        setZipcode(data);
    }

    const handleTotalInvestmentChange = (data) => {
        setTotalInvestment(data);
    }

    const handleMonthlyRevenueChange = (data) => {
        setMonthlyRevenue(data);
    }

    const handleAreaChange = (data) => {
        setArea(data);
    }

    const handlePropertyTypeChange = (isChecked, propertyType) => {
        if (isChecked) {
            setSelectedPropertyTypes([...selectedPropertyTypes, propertyType]);
        } else {
            setSelectedPropertyTypes(
                selectedPropertyTypes.filter((type) => type !== propertyType)
            );
        }
    };

    const handleSave = () => {
        // Add logic for saving the form data
        console.log('Form data saved!');
        const propertyInformation = {
            address,
            city,
            stateRegion,
            zipcode,
            totalInvestment,
            monthlyRevenue,
            area,
            submittedOn: new Date()
        };
        console.log(propertyInformation);

        toggleModal();
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h3 className='header'>ADD A NEW PROPERTY</h3>
                        <ButtonClose className="close-button" onClick={toggleModal}>
                            Close
                        </ButtonClose>
                        <div className="textfield">
                            <Field label="Enter Address" topLabel="Address" type="text" value={address} onChange={handleAddressChange(address)}/>
                            <Field label="Enter City" topLabel="City" type="text" value={city} onChange={handleCityChange(city)}/>
                            <Field label="Enter State/Region" topLabel="State / Region" type="text" value={stateRegion} onChange={handleStateRegionChange(stateRegion)}/>
                        </div>
                        <div className="textfield-two">
                            <Field label="12345" topLabel="Zipcode" type="text" value={zipcode} onChange={handleZipcodeChange}/>
                            <Field label="Enter total Investment" topLabel="Total Investment" type="currency" value={totalInvestment} onChange={handleTotalInvestmentChange}/>
                            <Field label="Enter Monthly revenue" topLabel="Monthly revenue" type="currency" value={monthlyRevenue} onChange={handleMonthlyRevenueChange}/>
                        </div>
                        <AreaField
                            topLabel="Area (Select unit of measure)"
                            label="Enter Area"
                            type="text"
                            fixedText={selectedUnit}
                            unitOptions={['sqft', 'm²']}
                            selectedUnit={selectedUnit}
                            onUnitChange={setSelectedUnit}
                        />
                        <div className="checkbox-section">
                            <PropertyTypeCheckbox
                                label="Apartment"
                                onChange={handlePropertyTypeChange}
                            />
                            <PropertyTypeCheckbox
                                label="House"
                                onChange={handlePropertyTypeChange}
                            />
                            <PropertyTypeCheckbox
                                label="Office Space"
                                onChange={handlePropertyTypeChange}
                            />
                            <PropertyTypeCheckbox
                                label="Other"
                                onChange={handlePropertyTypeChange}
                            />
                        </div>
                        <SaveButton label="ADD PROPERTY" onClick={handleSave}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUpForm;
