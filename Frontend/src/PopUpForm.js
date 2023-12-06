import React, { useState } from 'react';
import './AddPropertyPopup//PropertyPopUpCSS.css';
import Field from './AddPropertyPopup/Field';
import { SaveButton } from './AddPropertyPopup/ButtonSave';
import AreaField from './AddPropertyPopup/AreaField';
import PropertyTypeCheckbox from './AddPropertyPopup/PropertyTypeCheckbox';
import { ButtonClose } from './AddPropertyPopup/ButtonClose';

const PopUpForm = () => {
    const [modal, setModal] = useState(false);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [area, setArea] = useState('');
    const [totalInvestment, setTotalInvestment] = useState('');
    const [monthlyRevenue, setMonthlyRevenue] = useState('');
    const [image, setImage] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

    const toggleModal = () => {
        setModal(!modal);
    };

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
        const formData = {
            selectedUnit,
            selectedPropertyTypes,
        }
        console.log(formData);
        toggleModal();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const contactUsInformation = {
            address,
            city,
            zipcode,
            country,
            area,
            totalInvestment,
            monthlyRevenue,
            image,
            submittedOn: new Date()
        };
    }


    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <h3 className='header'>ADD A NEW PROPERTY</h3>
                        <ButtonClose className="close-button" onClick={toggleModal}>
                        </ButtonClose>
                        <div className="textfield">
                            <Field label="Enter Address" topLabel="Address" type="text" value={address}/>
                            <Field label="Enter City" topLabel="City" type="text" value={city}/>
                            <Field label="Enter State/Region" topLabel="State / Region" type="text" value={country}/>
                        </div>
                        <div className="textfield-two">
                            <Field label="12345" topLabel="Zipcode" type="text" value={zipcode}/>
                            <Field label="Enter total Investment" topLabel="Total Investment" type="currency" value={totalInvestment}/>
                            <Field label="Enter Monthly revenue" topLabel="Monthly revenue" type="currency" value={monthlyRevenue}/>
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