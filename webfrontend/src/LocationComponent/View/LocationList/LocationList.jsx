import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiBaseURL } from "../../../Config.js";
import "./LocationList.styles.css";
import { Link } from "react-router-dom";

export default function LocationList() {

    const [locationList, setLocationList] = useState([]);

    const getLocationList = async () => {
        const response = await axios.get(`${apiBaseURL}/location`);
        // console.log(response.data);
        setLocationList(response.data.locationList)
    }

    useEffect(() => {
        getLocationList();
    }, []);

    return (
        <>
            {
                locationList.map((location) => {
                    return (
                        <div className="list" key={location.id}>
                            <div className="ui card">
                                <Link to={`/home/location/${location.id}`}>
                                    <img src={location.imageURL} alt={location.name} />
                                </Link>
                                <div className="content">
                                    <Link to={`/home/location/${location.id}`}>
                                        {location.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}