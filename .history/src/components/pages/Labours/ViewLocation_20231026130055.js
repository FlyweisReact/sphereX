/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ViewLocation = () => {
  const { id } = useParams();
  const [position, setPosition] = useState({
    lat: 48.8584,
    lng: 2.2945,
  });

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://haroon-sphere-labour-bakend.vercel.app/getlabourprofilebyid/${id}`
      );
      setPosition({
        lat: parseFloat(data?.labour?.location?.longitude),
        lng: parseFloat(data?.labour?.location?.latitude),
      });
      console.log();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDntn5A6bf1VLX2WgNUetcG84HjRrCmE7w",
  });

  if (!isLoaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <div>
        <GoogleMap
          center={position}
          zoom={15}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF position={position} />
        </GoogleMap>
      </div>
    </>
  );
};

export default HOC(ViewLocation);
