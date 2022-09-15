import React from "react";
import Navbar from "../components/Navbar";

export default function PlaceList() {
  const axios = require('axios');

  async function makeRequest() {
    try {
      const config = {
        method: 'get',
        url: 'http://localhost:8080/place'
      }
      let res = await axios(config)
  
      return(<><Navbar/>{res.status}</>)
    } catch (error) {
      return (<><Navbar/> <p>error</p></>);
    }
  }

  return(makeRequest());
}